import { Actions, createEffect, ofType } from '@ngrx/effects';
import { decrement, increment, init, set } from './counter.action';
import { of, switchMap, tap, withLatestFrom } from 'rxjs';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCount } from './counter.selector';

@Injectable()
export class CounterEffects {
  saveCount;
  loadCount;
  // Save the count to local storage whenever it changes
  // This effect does not dispatch any new actions, so we set { dispatch: false }
  // in the options object
  // to prevent NgRx from expecting a new action to be returned.
  // The effect listens for the increment and decrement actions, and when one of them is dispatched,
  // it retrieves the value from the action and saves it to local storage.
  // The tap operator is used to perform a side effect (saving to local storage) without modifying the stream.
  // The effect is created using the createEffect function, which takes a function that returns an observable.
  // The ofType operator is used to filter the actions to only those that match the specified action types.
  constructor(
    private actions$: Actions,
    private store: Store<{ counter: { counter: number } }>
  ) {
    this.saveCount = createEffect(
      () =>
        this.actions$.pipe(
          ofType(increment, decrement),
          withLatestFrom(this.store.select(selectCount)),
          tap(([action, counter]) => {
            // const value = state.counter;
            console.log('Count changed:', action);
            localStorage.setItem('count', JSON.stringify(counter));
          })
        ),
      { dispatch: false }
    );
    this.loadCount = createEffect(() =>
      this.actions$.pipe(
        ofType(init),
        switchMap(() => {
          const count = localStorage.getItem('count');
          if (count) {
            const parsedCount = JSON.parse(count);
            console.log('Loading count from parsedCount storage:', parsedCount);
            return of(
              set({
                value: parsedCount,
              })
            );
          } else {
            return of(
              set({
                value: 0,
              })
            );
          }
        })
      )
    );
  }
}
