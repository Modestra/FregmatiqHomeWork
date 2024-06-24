import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtomComponent } from './buttom/buttom.component';
import { SelectComponent } from './select/select.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    ButtomComponent,
    SelectComponent,
    CommonModule,
    FormsModule
  ],
  exports: [
    ButtomComponent,
    SelectComponent
  ]
})
export class UIModule { }
