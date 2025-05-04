import {
  Component,
  DestroyRef,
  inject,
  OnInit,
  signal,
  effect,
} from '@angular/core';
import { interval, map } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  private destroyRef = inject(DestroyRef);
  clickCount = signal(0);
  constructor() {
    effect(() => {
      console.log('Click count:', this.clickCount());
    });
  }
  // Using signal to track click count

  ngOnInit(): void {
    // const subscription = interval(1000)
    //   .pipe(map((val) => val * 4))
    //   .subscribe({
    //     next: (value) => {
    //       console.log(value);
    //     },
    //     error: (err) => {
    //       console.error('Error occurred:', err);
    //     },
    //     complete: () => {
    //       console.log('Completed');
    //     },
    //   });
    // this.destroyRef.onDestroy(() => {
    //   subscription.unsubscribe();
    // });
  }
  onClick = () => {
    this.clickCount.update((count) => count + 1);
    console.log('Button clicked');
  };
}
