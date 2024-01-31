import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {DetailParams} from '../views/detail/Details';
import {HomeParams} from '../views/home/Home';
import {ProductParams} from '../views/myProduct/Product';
import {GamesParams} from '../views/game/Games';

export type RootStackParamList = {
  Home: HomeParams;
  Detail: DetailParams;
  Product: ProductParams;
  Games: GamesParams;
};
export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
