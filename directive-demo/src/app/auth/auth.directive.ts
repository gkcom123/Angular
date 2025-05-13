import { Directive, effect, inject, input } from '@angular/core';
import { Permission } from './auth.model';
import { AuthService } from './auth.service';

@Directive({
  selector: '[appAuth]',
})
export class AuthDirective {
  userType = input.required<Permission>({ alias: 'appAuth' });
  private authService = inject(AuthService);

  constructor() {
    effect(() => {
      if (this.authService.activePermission() == this.userType()) {
        console.log('User has permission: ' + this.userType());
      } else {
        console.log('User does not have permission: ' + this.userType());
      }
    });
  }
}
