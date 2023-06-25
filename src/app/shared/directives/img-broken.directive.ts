import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appImgBroken]',
})
export class ImgBrokenDirective {
  @HostListener('error')
  handleError(): void {
    const elNative = this.elHost.nativeElement;
    elNative.src =
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png';
  }

  constructor(private elHost: ElementRef) {}
}
