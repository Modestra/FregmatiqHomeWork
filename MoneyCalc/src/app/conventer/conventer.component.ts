import {
  Component, Input,
  ViewChild, ElementRef, DoCheck,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { UIModule } from '../ui/ui.module';
import { CommonModule } from '@angular/common';
import { ConvertCoupe, Valutes } from '../entity/vatues';
import { FormsModule } from '@angular/forms';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'conventer',
  standalone: true,
  templateUrl: './conventer.component.html',
  styleUrl: './conventer.component.scss',
  imports: [UIModule, CommonModule, FormsModule, FormComponent],
})
export class ConventerComponent implements DoCheck, OnChanges {

  @Input({ required: true }) MoneyCourse: Valutes[] | undefined = [];
  @Input({ required: true }) MoneyResult: Valutes[] | undefined = [];

  @ViewChild('InputValute') inputeValute: ElementRef | undefined;

  //Избранные валюты
  public VatuleFeatured: Valutes[] | undefined = [];

  //Курс валют
  public startCource: number = 0;
  public resultCource: number = 0;

  //Первый Input
  public start: number = 0;
  //Второй Input
  public result: number = 0;

  //Отдаваемый массив
  public convertCoupe: ConvertCoupe = {
    start: this.start,
    startCode: this.startCource,
    result: this.result,
    resultCode: this.resultCource

  };

  ngDoCheck(): void {
    this.result = (this.start * this.startCource) / this.resultCource
    this.convertCoupe = {
      start: this.start,
      startCode: this.startCource,
      result: this.result,
      resultCode: this.resultCource

    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("Входные данные", changes)
  }

  ObChangeSelectedValute(data: any) {
    this.MoneyCourse = data;
  }

  SaveContainer() {

  }

}
