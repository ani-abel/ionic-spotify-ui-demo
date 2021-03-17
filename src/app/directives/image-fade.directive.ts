import { Directive, HostListener, Input, Renderer2 } from '@angular/core';
import { DomController } from '@ionic/angular';

@Directive({
  selector: '[appImageFade]'
})
export class ImageFadeDirective {
  @Input('appImageFade') cover: any;

  constructor(
    private readonly renderer: Renderer2,
    private readonly domCtrl: DomController,
  ) { }

  @HostListener("ionScroll", ["$event"])
  onContentScroll($event: any): void {
    const scrollTop: number = $event.detail.scrollTop;
    const newOpacity = Math.max(100 - (scrollTop / 3), 0);
    let newPadding = 15 + (scrollTop / 25);

    if (newPadding > 100) {
      newPadding = 100;
    }
    /**
     * DOM Controller is used to write data to the DOM in a safe manner
     */
    this.domCtrl.write(() => {
      /**
       * Renderer allows us to call an element by
       * reference and then point the styles to it
       */
      this.renderer.setStyle(this.cover, 'opacity', `${newOpacity}%`);
      this.renderer.setStyle(this.cover, 'padding-left', `${newPadding}%`);
      this.renderer.setStyle(this.cover, 'padding-right', `${newPadding}%`)
    });
  }
}
