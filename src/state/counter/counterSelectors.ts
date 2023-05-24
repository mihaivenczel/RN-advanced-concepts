import {createSelector} from '@reduxjs/toolkit';

import {RootState} from 'state/store';

import SliceNames from 'constants/sliceNames';

const sliceSelector = (state: RootState) => {
  return state[SliceNames.counter];
};

/**
 * Object to hold all selectors for this slice.
 * In this instance, it only holds a selector for the value property in the state.
 * It's better for selectors to be as granular as possible, due to memoized values.
 */
export const counterSelectors = {
  selectValue: createSelector(sliceSelector, state => state.value),
};
