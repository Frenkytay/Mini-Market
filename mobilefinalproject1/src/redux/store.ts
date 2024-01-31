import {configureStore} from '@reduxjs/toolkit';
import myProductReducer from '../views/myProduct/redux/ProductSlice';
import myCoinReducer from '../views/home/redux/CoinSlice';

export const store = configureStore({
  reducer: {
    myProduct: myProductReducer,
    myCoin: myCoinReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
