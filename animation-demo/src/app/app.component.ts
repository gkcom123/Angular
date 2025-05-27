import { animate, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [CommonModule],
  styleUrl: './app.component.css',
  animations: [
    // Fade in and slide down animation for the box
    // Fade out and slide up animation for the box
    trigger('fadeSlide', [
      // enter and leave transitions
      // :enter is triggered when the element is added to the DOM
      // :leave is triggered when the element is removed from the DOM
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-20px)' }),
        animate(
          '500ms ease-out',
          style({ opacity: 1, transform: 'translateY(0)' })
        ),
      ]),
      transition(':leave', [
        animate(
          '500ms ease-in',
          style({ opacity: 0, transform: 'translateY(20px)' })
        ),
      ]),
    ]),
  ],
})
export class AppComponent {
  showBox = true;

  toggleBox() {
    this.showBox = !this.showBox;
  }
}
