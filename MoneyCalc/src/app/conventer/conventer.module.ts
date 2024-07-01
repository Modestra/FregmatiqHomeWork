import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConventerComponent } from './conventer.component';
import { FormComponent } from '../form/form.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ConventerComponent,
    FormComponent
  ],
  exports:[
    ConventerComponent
  ]
})
export class ConventerModule { }
