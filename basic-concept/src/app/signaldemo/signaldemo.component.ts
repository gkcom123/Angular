import { NgFor } from '@angular/common';
import { Component, computed, signal, effect } from '@angular/core';

@Component({
  selector: 'app-signaldemo',
  imports: [NgFor],
  standalone: true,
  templateUrl: './signaldemo.component.html',
  styleUrl: './signaldemo.component.css',
})
export class SignaldemoComponent {
  actions = signal<string[]>([]);
  counter = signal(0);
  doubleCounted = computed(() => this.counter() * 2);
  constructor() {
    // effect(() => {
    //   console.log('Counter changed: ', this.counter());
    // });
    effect(() => {
      console.log('Counter changed: ', this.counter());
      console.log('Double counted: ', this.doubleCounted());
      console.log('Actions: ', this.actions());
    });
  }
  increment() {
    this.counter.update((prev) => prev + 1);
    this.actions.update((prev) => [...prev, 'INCREMENT']);
  }

  decrement() {
    this.counter.update((prev) => prev - 1);
    this.actions.update((prev) => [...prev, 'DECREMENT']);
  }
}
