import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Valutes } from '../../entity/vatues';
import { ApiMoneyService } from '../../services/api-money.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'Selector',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss'
})
export class SelectComponent implements OnInit {

    @Output() selected = new EventEmitter<Valutes>()
    public moneylist:Valutes[] | undefined = []
    public list: Valutes[] | undefined = []
    constructor(private _money: ApiMoneyService){

    }
    ngOnInit(): void {
      this._money.getValutes().subscribe((resp)=>{
        this.moneylist = resp.Valute
        this.list = Object.values(this.moneylist).map((values)=>{
          return values
        })
        console.log(this.list)

      })
    }

    ngOnChanges(): void {
      console.log("Значение выбрано", this.selected)
    }
}
