import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[appLog]',
  standalone: true,
  host: {
    '(click)': 'onClick($event)',
  },
})
export class LogDirective {
  hostElement = inject<ElementRef<HTMLElement>>(ElementRef);
  constructor() {}
  onClick(event: Event) {
    const element = this.hostElement.nativeElement;
    console.log('Element clicked:', element);
    console.log('Element text:', element.innerText);
    console.log('Element class:', element.className);
    console.log('Element id:', element.id);
    console.log('Element href:', element.getAttribute('href'));
  }
}
