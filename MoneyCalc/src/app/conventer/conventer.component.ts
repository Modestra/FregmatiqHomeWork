import { Component, OnInit, Input, DoCheck } from '@angular/core';
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
  public test: number = 0;
  constructor() {

  }

  ngOnInit(): void {

  }

  ObChangeSelectedValute(data: any) {
    this.MoneyCourse = data;
  }

  PutOnChanges() {
    console.log(this.test)
  }
}
