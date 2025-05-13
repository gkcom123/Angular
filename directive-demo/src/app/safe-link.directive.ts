import { Directive, ElementRef, input, inject } from '@angular/core';

@Directive({
  selector: 'a[appSafeLink]',
  standalone: true,
  host: {
    '(click)': 'onClick($event)',
  },
})
export class SafeLinkDirective {
  queryParam = input('my-app-query-param', { alias: 'appSafeLink' });
  hostElement = inject<ElementRef<HTMLAnchorElement>>(ElementRef);
  constructor() {
    console.log('SafeLinkDirective initialized');
    // This directive is used to mark links as safe
    // You can add any additional logic here if needed
  }
  onClick(event: Event) {
    const wanttoLeave = confirm(
      'You are about to leave this site. Do you want to continue?'
    );
    if (wanttoLeave) {
      // const address = event.target as HTMLAnchorElement;
      const address = this.hostElement.nativeElement;
      address.href = address.href + '?from=' + this.queryParam();
      // Prevent the default action of the link
      return;
    }
    event.preventDefault();
    console.log('SafeLinkDirective clicked');

    // This method is called when the link is clicked
  }
}
