import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { ConvertCoupe } from '../entity/vatues';

@Component({
  selector: 'ConventerTable',
  standalone: true,
  imports: [],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent implements OnChanges {
  @Input() CoupeValute: ConvertCoupe[] = [];
  @Output() CoupeValuteChange = new EventEmitter<ConvertCoupe[]>();
  public storage: ConvertCoupe[] | undefined = [];

  ngOnChanges(changes: SimpleChanges): void {
    localStorage.setItem('coupes', JSON.stringify(this.CoupeValute));
    this.storage = JSON.parse(localStorage.getItem('coupes') || '{}') as ConvertCoupe[];
    console.log(JSON.parse(localStorage.getItem('coupes') || '{}'))
  }

}
