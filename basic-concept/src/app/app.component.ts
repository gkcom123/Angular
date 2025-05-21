import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SignaldemoComponent } from './signaldemo/signaldemo.component';
import { DefaultdemoComponent } from './defaultdemo/defaultdemo.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SignaldemoComponent, DefaultdemoComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'basic-concept';
}
