import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-defaultdemo',
  imports: [NgFor],
  standalone: true,
  templateUrl: './defaultdemo.component.html',
  styleUrl: './defaultdemo.component.css',
})
export class DefaultdemoComponent {
  actions: string[] = [];
  counter = 0;

  increment() {
    this.counter++;
    this.actions.push('INCREMENT');
  }

  decrement() {
    this.counter--;
    this.actions.push('DECREMENT');
  }
}
