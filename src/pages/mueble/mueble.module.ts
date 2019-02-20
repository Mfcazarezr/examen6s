import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MueblePage } from './mueble';

@NgModule({
  declarations: [
    MueblePage,
  ],
  imports: [
    IonicPageModule.forChild(MueblePage),
  ],
})
export class MueblePageModule {}
