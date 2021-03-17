import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ImageFadeDirective } from "./image-fade.directive";

@NgModule({
  declarations: [
    ImageFadeDirective
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ImageFadeDirective
  ]
})
export class SharedDirectiveModule { }
