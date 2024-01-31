import React from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {useAppSelector} from '../../redux/hook';
import {SafeAreaView} from 'react-native-safe-area-context';
import {RootStackScreenProps} from '../../navigation/types';
import ArrowLeft from '../../asset/ArrowLeft';
import styles from '../styles/ProductSyles';
export type ProductParams = undefined;
const Product = ({navigation}: RootStackScreenProps<'Product'>) => {
  // get all data in redux
  const product = useAppSelector(state => state.myProduct.myProduct);
  return (
    <SafeAreaView style={styles.background}>
      <View>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Home');
            }}>
            {ArrowLeft(styles.arrowIcon)}
          </TouchableOpacity>
          <Text style={styles.headerText}>Back To Home </Text>
        </View>
        <FlatList
          data={product}
          // contentContainerStyle= null}
          renderItem={({item}) => (
            <TouchableOpacity
              key={item.productId}
              style={styles.itemContainer}
              onPress={() => {
                navigation.navigate('Detail', {
                  id: item.id,
                  sell: true,
                  productId: item.productId,
                  title: item.title,
                });
              }}>
              <Image source={{uri: item.image}} style={styles.productImage} />
              <View>
                <Text style={styles.productTitle}>{item.title}</Text>
                <Text>${item.price}</Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.productId}
        />
      </View>
    </SafeAreaView>
  );
};

export default Product;
