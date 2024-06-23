import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtomComponent } from './buttom/buttom.component';
import { SelectComponent } from './select/select.component';



@NgModule({
  declarations: [],
  imports: [
    ButtomComponent,
    SelectComponent,
    CommonModule
  ],
  exports: [
    ButtomComponent,
    SelectComponent
  ]
})
export class UIModule { }
