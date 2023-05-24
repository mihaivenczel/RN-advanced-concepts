import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import SliceNames from 'constants/sliceNames';

import ICounterSlice from 'models/stateModels/ICounterSlice';

const initialState: ICounterSlice = {
  value: 0,
};

export const {
  name,
  reducer: counterReducer,
  actions: counterActions,
} = createSlice({
  name: SliceNames.counter,
  initialState,
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    changeByValue: (state, action: PayloadAction<ICounterSlice['value']>) => {
      state.value += action.payload;
    },
  },
});
