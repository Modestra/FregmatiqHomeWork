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
  @Input() items: Valutes[] | undefined = [];
  public moneycode : Valutes[] | undefined = [];

  constructor(){
    this.moneycode = this.items
  }

  ngOnInit(): void {

  }
  ngOnChanges(): void {
    console.log(this.items)
    
  }
}
