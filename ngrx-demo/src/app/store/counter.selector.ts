import { createSelector } from '@ngrx/store';

export const selectCount = (state: { counter: { counter: number } }) =>
  state.counter.counter;

//The last arguments to createSelector (the projector fn) runs only if input selectors produce new values.

// If inputs are the same as last call (by reference), the cached result is returned instantly.

export const selectDoubleCount = createSelector(
  selectCount,
  (count) => count * 2
);
