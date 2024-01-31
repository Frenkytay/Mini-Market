import React, {useState} from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {RootStackScreenProps} from '../../navigation/types';
import ArrowLeft from '../../asset/ArrowLeft';
import {useAppDispatch} from '../../redux/hook';
import {addCoin} from '../home/redux/CoinSlice';
import styles from '../styles/GameStyles';
export type GamesParams = undefined;

const Games = ({navigation}: RootStackScreenProps<'Games'>) => {
  const dispatch = useAppDispatch();
  const [egg, setEgg] = useState(false);
  const cointImage = (value: string) => {
    if (value === 'gold') {
      return (
        <Image
          source={require('../../asset/gold-coin.png')}
          style={styles.coinIcon}
        />
      );
    } else if (value === 'silver') {
      return (
        <Image
          source={require('../../asset/silver-coin.png')}
          style={styles.coinIcon}
        />
      );
    } else {
      return (
        <Image
          source={require('../../asset/bronze-coin.png')}
          style={styles.coinIcon}
        />
      );
    }
  };
  const [prize, setPrize] = useState<{
    key: number;
    value: string;
    imageSource: string;
  } | null>(null);

  const coin = [
    {
      key: 100,
      value: 'gold',
      imageSource: '../../asset/gold-coin.png)',
    },
    {
      key: 50,
      value: 'silver',
      imageSource: '../../asset/silver-coin.png',
    },
    {
      key: 20,
      value: 'bronze',
      imageSource: '../../asset/bronze-coin.png',
    },
  ];
  //generate the prize for user if the egg is clicked
  const getPrize = () => {
    if (!egg) {
      const tempCoin = coin[Math.floor(Math.random() * 3)];
      setPrize(tempCoin);
      dispatch(addCoin(tempCoin.key));
    }
  };

  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Home');
          }}>
          {ArrowLeft(styles.arrowIcon)}
        </TouchableOpacity>
        <Text style={styles.headerText}> Back To Home </Text>
      </View>
      <View style={styles.coinContainer}>
        <View style={styles.coinWrapper}>
          <Image
            source={require('../../asset/gold-coin.png')}
            style={styles.coinIcon}
          />
          <Text>100</Text>
        </View>
        <View style={styles.coinWrapper}>
          <Image
            source={require('../../asset/silver-coin.png')}
            style={styles.coinIcon}
          />
          <Text>50</Text>
        </View>
        <View style={styles.coinWrapper}>
          <Image
            source={require('../../asset/bronze-coin.png')}
            style={styles.coinIcon}
          />
          <Text>20</Text>
        </View>
      </View>
      <View style={styles.eggContainer}>
        <View style={styles.eggBox}>
          {egg && prize ? (
            <View style={styles.prizeContainer}>
              <Text style={styles.eggText}>Congratulations!</Text>
              <Text>You got a {prize.value} coin</Text>
              {cointImage(prize.value)}
            </View>
          ) : (
            <Text style={styles.eggText}>
              Click on the egg to get your prize!
            </Text>
          )}

          <TouchableOpacity
            onPress={() => {
              getPrize();
              setEgg(true);
            }}>
            <Image
              source={
                egg
                  ? require('../../asset/egg-broken.png')
                  : require('../../asset/egg-full.png')
              }
              style={styles.eggImage}
            />
          </TouchableOpacity>
          {egg && prize ? (
            <View>
              <Text>{prize.key} coin have been added to your balance </Text>
            </View>
          ) : (
            <></>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Games;
