import { Actions, createEffect, ofType } from '@ngrx/effects';
import { decrement, increment } from './counter.action';
import { tap } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class CounterEffects {
  saveCount;
  // Save the count to local storage whenever it changes
  // This effect does not dispatch any new actions, so we set { dispatch: false }
  // in the options object
  // to prevent NgRx from expecting a new action to be returned.
  // The effect listens for the increment and decrement actions, and when one of them is dispatched,
  // it retrieves the value from the action and saves it to local storage.
  // The tap operator is used to perform a side effect (saving to local storage) without modifying the stream.
  // The effect is created using the createEffect function, which takes a function that returns an observable.
  // The ofType operator is used to filter the actions to only those that match the specified action types.
  constructor(private actions$: Actions) {
    this.saveCount = createEffect(
      () =>
        this.actions$.pipe(
          ofType(increment, decrement),
          tap((action) => {
            const { value } = action as { value: number };
            console.log('Count changed:', action);
            localStorage.setItem('count', JSON.stringify(value));
          })
        ),
      { dispatch: false }
    );
  }
}
