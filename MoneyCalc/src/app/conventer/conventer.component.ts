import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { UIModule } from '../ui/ui.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'conventer',
  standalone: true,
  templateUrl: './conventer.component.html',
  styleUrl: './conventer.component.scss',
  imports: [UIModule, CommonModule],
})
export class ConventerComponent implements OnInit {

  public MoneyCourse: number | undefined;
  constructor() {

  }

  ngOnInit(): void {

  }

  ObChangeSelectedValute(data: any) {
    this.MoneyCourse = data;
  }
}
