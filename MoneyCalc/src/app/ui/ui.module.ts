import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtomComponent } from './buttom/buttom.component';
import { FormsModule } from '@angular/forms';
import { InputComponent } from './input/input.component';
import { StoreModule } from '@ngrx/store';



@NgModule({
  declarations: [],
  imports: [
    ButtomComponent,
    InputComponent,
    CommonModule,
    FormsModule,
  ],
  exports: [
    ButtomComponent,
    InputComponent
  ]
})
export class UIModule { }
