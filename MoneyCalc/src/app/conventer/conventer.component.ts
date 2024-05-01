import { Component, OnInit, ViewChild } from '@angular/core';
import { UIModule } from '../ui/ui.module';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ApiMoneyService } from '../services/api-money.service';
import { Valutes } from '../entity/vatues';

@Component({
  selector: 'app-conventer',
  standalone: true,
  templateUrl: './conventer.component.html',
  styleUrl: './conventer.component.scss',
  imports: [UIModule, CommonModule]
})
export class ConventerComponent implements OnInit {
  ;
  public items: Valutes[] = [];
  constructor(private _apimoney: ApiMoneyService) {

  }

  ngOnInit(): void {
    this._apimoney.getValutes().subscribe(resp => {
      this.items = resp.Valute;
    })
  }
}
