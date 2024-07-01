import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ConvertCoupe } from '../entity/vatues';

@Component({
  selector: 'ConventerTable',
  standalone: true,
  imports: [],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  @Input() CoupeValute : ConvertCoupe[] = [];
  @Output() CoupeValuteChange = new EventEmitter<ConvertCoupe[]>();

  constructor(){

  }

}
