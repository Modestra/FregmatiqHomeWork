import { Component, OnInit, Input } from '@angular/core';
import { UIModule } from '../ui/ui.module';
import { CommonModule } from '@angular/common';
import { Valutes } from '../entity/vatues';

@Component({
  selector: 'conventer',
  standalone: true,
  templateUrl: './conventer.component.html',
  styleUrl: './conventer.component.scss',
  imports: [UIModule, CommonModule],
})
export class ConventerComponent implements OnInit {

  public MoneyCourse: number | undefined;
  constructor(){

  }

  ngOnInit(): void {
    
  }
  ngOnChanges(): void {
    
  }

  ObChangeSelectedValute(data: Valutes) {
    this.MoneyCourse = data.Value;
  }
}
