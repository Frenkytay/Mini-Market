import {PayloadAction, createSlice} from '@reduxjs/toolkit';

export type CointState = {
  myCoin: number;
};
const initialState: CointState = {
  myCoin: 500,
};
export const coinSlice = createSlice({
  name: 'myCoin',
  initialState,
  reducers: {
    addCoin: (state, action: PayloadAction<number>) => {
      state.myCoin = state.myCoin + action.payload;
    },
    reduceCoin: (state, action: PayloadAction<number>) => {
      state.myCoin = state.myCoin - action.payload;
    },
  },
});
export const {addCoin, reduceCoin} = coinSlice.actions;
const myCoinReducer = coinSlice.reducer;
export default myCoinReducer;
