import React from 'react';
import {
  // Alert,
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import {Text} from 'react-native';
import styles from '../styles/HomeStyles';

import SearchIcon from '../../asset/SearchIcon';
import GridViewIcon from '../../asset/GridViewIcon';
import {RootStackScreenProps} from '../../navigation/types';
import ListViewIcon from '../../asset/ListViewIcon';
import {useAppSelector} from '../../redux/hook';
export type HomeParams = undefined;
type productType = {
  id: string;
  price: string;
  image: string;
  title: string;
  description: string;
};
const Home = ({navigation}: RootStackScreenProps<'Home'>) => {
  const coin = useAppSelector(state => state.myCoin.myCoin);
  // const roundCoin = coin.toFixed();
  const [data, setData] = React.useState<productType[] | null>(null);
  const [masterData, setMasterData] = React.useState<productType[] | null>(
    null,
  );
  const [search, setSearch] = React.useState('');
  const [gridButton, setGridButton] = React.useState('false');
  // For fetching data
  React.useEffect(() => {
    const getData = async () => {
      const res = await fetch('https://fakestoreapi.com/products');
      const result = await res.json();
      // console.log(result);

      setData(result);
      setMasterData(result);
    };
    getData();
  }, []);
  //  search bar for every change that happen in input field and update the data to show
  const searchFilter = (text: string) => {
    if (text && masterData) {
      const newData = masterData.filter(item => {
        const itemData = item.title
          ? item.title.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setData(newData);
      setSearch(text);
    } else {
      setData(masterData);
      setSearch(text);
    }
  };
  // component to render in flat list
  const viewComponent = ({item}: {item: productType}) => {
    return (
      <TouchableOpacity
        style={
          gridButton === 'true'
            ? styles.itemGridContainer
            : styles.itemContainer
        }
        onPress={() => {
          navigation.navigate('Detail', {
            id: item.id,
            sell: false,
            productId: '',
            title: item.title,
          });
        }}>
        <Image source={{uri: item.image}} style={styles.productImage} />
        <View>
          <Text style={styles.productTitle}>{item.title.slice(0, 60)}</Text>
          <Text>${item.price}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.app}>
      <View style={styles.background}>
        <View style={styles.input}>
          {SearchIcon(styles.icon)}
          <TextInput
            placeholder="Search Product.."
            style={styles.inputText}
            value={search}
            onChangeText={text => searchFilter(text)}
          />
        </View>

        <View style={styles.container}>
          <Pressable
            style={styles.productBtn}
            //will navigate user to product page if clicked
            onPress={() => navigation.navigate('Product')}>
            <Text style={styles.productBtnText}>My Product</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.coin}>
        <Text style={styles.myCoin}>{coin.toFixed(2)}</Text>
        <Text style={styles.myCoinText}>My Coin</Text>
      </View>
      <View style={styles.productContainer}>
        <View style={styles.box}>
          <View style={styles.container}>
            <Text style={styles.productMenuText}>Available Product</Text>
            <Pressable
              //see if user want grid view or list view
              onPress={() => {
                setGridButton(gridButton === 'true' ? 'false' : 'true');
              }}>
              {gridButton === 'true'
                ? GridViewIcon(styles.icon)
                : ListViewIcon(styles.icon)}
            </Pressable>
          </View>
          <View style={styles.gridView}>
            <View
              style={
                gridButton === 'true'
                  ? styles.gridContainer
                  : styles.rowContainer
              }>
              <FlatList
                key={gridButton}
                data={data}
                numColumns={gridButton === 'true' ? 2 : 1}
                renderItem={viewComponent}
                keyExtractor={item => item.id}
              />

              <TouchableOpacity
                style={styles.gamesIconWrapper}
                onPress={() => {
                  navigation.navigate('Games');
                }}>
                <Image
                  source={require('../../asset/egg-full.png')}
                  style={styles.gamesIcon}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
