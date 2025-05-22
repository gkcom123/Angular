import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterOutputComponent } from './counter-output/counter-output.component';
import { CounterControlsComponent } from './counter-controls/counter-controls.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CounterOutputComponent, CounterControlsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ngrx-demo';
}
