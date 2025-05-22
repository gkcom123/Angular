import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
  standalone: true,
  imports: [AsyncPipe],
})
export class CounterOutputComponent {
  count$: Observable<number>;

  constructor(private store: Store<{ counter: { counter: number } }>) {
    this.count$ = store.select((state) => state.counter.counter);
  }
}
