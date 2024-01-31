import React, {useState} from 'react';
import {
  Alert,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import {Text} from 'react-native';
import ArrowLeft from '../../asset/ArrowLeft';
import {RootStackScreenProps} from '../../navigation/types';
import {useAppDispatch, useAppSelector} from '../../redux/hook';
import {add, remove} from '../myProduct/redux/ProductSlice';
import {addCoin, reduceCoin} from '../home/redux/CoinSlice';
import styles from '../styles/DetailStyles';
export type DetailParams = {
  id: string;
  sell: boolean;
  productId: string;
  title: string;
};
export type ProductType = {
  productId: string;
  id: string;
  image: string;
  title: string;
  price: number;
  description: string;
};
const Detail = ({navigation, route}: RootStackScreenProps<'Detail'>) => {
  const [data, setData] = useState<ProductType | null>(null);
  const sell = route.params.sell;
  const dispatch = useAppDispatch();
  const coin = useAppSelector(state => state.myCoin.myCoin);
  //fetch data using product id
  React.useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        `https://fakestoreapi.com/products/${route.params.id}`,
      );
      const result: ProductType = await res.json();
      setData(result);
    };
    getData();
  }, [route.params.id]);
  // if user want to buy product
  const buyProduct = (price: number) => {
    if (data) {
      if (price > coin) {
        Alert.alert(
          'insufficient money',
          'Your coin balance not enough to buy this product',
        );
      } else {
        Alert.alert(
          'Purchase successful',
          `successful buy product with $${price}`,
        );
        dispatch(reduceCoin(price));
        dispatch(add(data));
        navigation.navigate('Product');
      }
    }
  };
  //if user want to sell product
  const sellProduct = () => {
    if (data) {
      Alert.alert('Successful', `Successful sell ${data.title}`);
      dispatch(addCoin(data.price));
      dispatch(remove(route.params.productId));
      navigation.navigate('Product');
    }
  };

  return (
    <SafeAreaView style={styles.background}>
      {data ? (
        <ScrollView>
          <View>
            <View style={styles.header}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Home');
                }}>
                {ArrowLeft(styles.arrowIcon)}
              </TouchableOpacity>
              <Text style={styles.headerText}>
                {data.title.slice(0, 30)}...{' '}
              </Text>
            </View>
            <View style={styles.imageContainer}>
              <Image
                source={data ? {uri: data.image} : {uri: ''}}
                style={styles.image}
              />
            </View>
            <View style={styles.container}>
              <View style={styles.box}>
                <Text style={styles.titleText}>{data.title}</Text>
                <Text style={styles.priceTag}>Price</Text>
                <Text style={styles.price}>${data.price}</Text>
                <Text style={styles.descriptionTag}>Description</Text>
                <Text style={styles.description}>{data.description}</Text>
              </View>
              {sell ? (
                <TouchableOpacity
                  style={styles.sellButton}
                  onPress={() => {
                    dispatch(remove(route.params.productId));
                    Alert.alert(
                      `${data.title}`,
                      'Do you want to sell this product',
                      [
                        {
                          text: 'Cancel',
                        },
                        {
                          text: 'Sell',
                          onPress: () => sellProduct(),
                        },
                      ],
                    );
                  }}>
                  <Text style={styles.sellButtonText}>Sell</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    Alert.alert(
                      `${data.title}`,
                      'Do you want to buy this product',
                      [
                        {
                          text: 'Cancel',
                        },
                        {
                          text: 'Buy',
                          onPress: () => buyProduct(data.price),
                        },
                      ],
                    );
                  }}>
                  <Text style={styles.buttonText}>Buy</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </ScrollView>
      ) : (
        <Text>Loading</Text>
      )}

      {/* <Text>HEllo</Text> */}
    </SafeAreaView>
  );
};

export default Detail;
