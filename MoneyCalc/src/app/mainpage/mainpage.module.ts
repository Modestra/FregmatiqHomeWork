import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { ConvertRedicer } from '../reducers/convert/convert.reducer';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('conventer', ConvertRedicer)
  ]
})
export class MainpageModule { }
