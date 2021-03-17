import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlbumPageRoutingModule } from './album-routing.module';

import { AlbumPage } from './album.page';
import { SharedDirectiveModule } from '../directives/shared-directive.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedDirectiveModule,
    AlbumPageRoutingModule
  ],
  declarations: [AlbumPage]
})
export class AlbumPageModule {}
