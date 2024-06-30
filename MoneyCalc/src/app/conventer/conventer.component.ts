import { Component, OnInit, Input } from '@angular/core';
import { UIModule } from '../ui/ui.module';
import { CommonModule } from '@angular/common';
import { Valutes } from '../entity/vatues';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'conventer',
  standalone: true,
  templateUrl: './conventer.component.html',
  styleUrl: './conventer.component.scss',
  imports: [UIModule, CommonModule, FormsModule],
})
export class ConventerComponent implements OnInit {

  @Input() title: string = '';
  @Input() MoneyCourse: Valutes[] | undefined = [];
  @Input() MoneyResult: Valutes[] | undefined = [];

  //Избранные валюты
  public VatuleFeatured: Valutes[] | undefined = [];

  //Курс валют
  public startCource: number = 0;
  public resultCource: number = 0;

  //Первый Input
  public start: number = 0;
  //Второй Input
  public result: number = 0;

  constructor() {

  }

  ngOnInit(): void {

  }

  ngOnChanges(): void {
    this.result = (this.start * this.startCource) / this.resultCource
  }

  ObChangeSelectedValute(data: any) {
    this.MoneyCourse = data;
  }

  PutOnChanges() {
    this.result = (this.start * this.startCource) / this.resultCource
  }
  GetValue() {
    console.log()
  }
}
