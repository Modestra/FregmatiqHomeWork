import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConventerComponent } from './conventer.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ConventerComponent
  ],
  exports:[
    ConventerComponent
  ]
})
export class ConventerModule { }
