import { Component } from '@angular/core';
import { SafeLinkDirective } from '../safe-link.directive';
import { AuthDirective } from '../auth/auth.directive';

@Component({
  selector: 'app-learning-resources',
  templateUrl: './learning-resources.component.html',
  styleUrl: './learning-resources.component.css',
  standalone: true,
  imports: [SafeLinkDirective, AuthDirective],
})
export class LearningResourcesComponent {}
