import { Directive, ElementRef, Input, Renderer, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDemo]'
})
export class DemoDirective {

  // @Input() appDemo: string;

  @Input() config: any = {
    querySelector: 'button'
  }

  @HostBinding('class.card-outline-primary') private ishovering: boolean;

  constructor(
    private el: ElementRef,
    private renderer: Renderer
  ) {
    // el.nativeElement.style.backgroundColor = 'red';
    // renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'blue')
  }

  @HostListener('click') onClick() {
    
    this.ishovering =! this.ishovering;

    if(this.ishovering === true){
      let part = this.el.nativeElement.querySelector(this.config.querySelector);
      this.renderer.setElementStyle(part, 'backgroundColor', 'red');

    } else {
      let part = this.el.nativeElement.querySelector(this.config.querySelector);
      this.renderer.setElementStyle(part, 'backgroundColor', '#007bff');
    }
  }
  

}
