import { Directive, ElementRef, Renderer2, HostListener  } from '@angular/core';

//The host listener will listen to mouse movements of the screen and appropriately respond in those circumstances.
//Now why do we use this Renderer? When you create directives within your Angular application, from your Angular application itself although at the moment our angular application is being rendered mainly in the browser. You can use the same scaffolding code for your Angular partition to create an application for other purposes.

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef,
    private renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.addClass(this.el.nativeElement, 'highlight');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.removeClass(this.el.nativeElement, 'highlight');
  }

}
