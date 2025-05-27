import { createReducer, on } from '@ngrx/store';
import { decrement, increment, set } from './counter.action';

const initialState = {
  counter: 0,
};
export const counterReducer = createReducer(
  initialState,
  on(increment, (state, action) => ({
    ...state,
    counter: state.counter + action.value,
  })),
  on(decrement, (state, action) => ({
    ...state,
    counter: state.counter - action.value,
  })),
  on(set, (state, action) => {
    console.log('Action received in reducer:', action);
    return {
      ...state,
      counter: action.value,
    };
  })
);
