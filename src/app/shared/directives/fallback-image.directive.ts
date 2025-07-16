import { Directive, HostListener, Input, ElementRef } from '@angular/core';

@Directive({
  standalone: true,
  selector: 'img[fallbackSrc]'
})
export class FallbackImageDirective {
  @Input() fallbackSrc!: string;

  constructor(private el: ElementRef<HTMLImageElement>) {}

  @HostListener('error')
  onError() {
    const element = this.el.nativeElement;
    if (element.src !== this.fallbackSrc) {
      element.src = this.fallbackSrc;
    }
  }
}