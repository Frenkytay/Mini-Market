/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Home from './src/views/home/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Detail from './src/views/detail/Details';
import {RootStackParamList} from './src/navigation/types';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import Product from './src/views/myProduct/Product';
import Games from './src/views/game/Games';
const stack = createNativeStackNavigator<RootStackParamList>();
function App() {
  return (
    <SafeAreaView style={styles.background}>
      <Provider store={store}>
        <MyNavigator />
      </Provider>
    </SafeAreaView>
  );
}
const MyNavigator = () => {
  // const [coin, setCoin] = React.useState(0);
  return (
    <NavigationContainer>
      <stack.Navigator screenOptions={{headerShown: false}}>
        <stack.Screen name="Home" component={Home} />
        <stack.Screen
          name="Detail"
          component={Detail}
          // options={({route}) => ({title: route.params.title})}
        />
        <stack.Screen name="Product" component={Product} />
        <stack.Screen name="Games" component={Games} />
      </stack.Navigator>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
});

export default App;
