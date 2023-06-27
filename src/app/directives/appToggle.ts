import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appToggle]'
})
export class ToggleDirective {
  constructor(private el: ElementRef) {}

  @HostListener('click')
  toggle() {
    const element = this.el.nativeElement.nextElementSibling;
    element.hidden = !element.hidden;
  }
}
