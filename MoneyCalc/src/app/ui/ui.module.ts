import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtomComponent } from './buttom/buttom.component';



@NgModule({
  declarations: [],
  imports: [
    ButtomComponent,
    CommonModule
  ],
  exports: [
    ButtomComponent
  ]
})
export class UIModule { }
