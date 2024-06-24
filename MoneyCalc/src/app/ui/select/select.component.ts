import { CommonModule } from '@angular/common';
import { Component, DoCheck, EventEmitter, OnInit, Output } from '@angular/core';
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

  @Output() selected = new EventEmitter<string>()
  public moneylist: Valutes[] | undefined = []
  public list: Valutes[] | undefined = []
  public test: any = ''
  constructor(private _money: ApiMoneyService) {

  }
  ngOnInit(): void {
    this._money.getValutes().subscribe((resp) => {
      this.moneylist = resp.Valute
      this.list = Object.values(this.moneylist).map((values) => {
        return values
      })
    })
  }

  PutOnChanges() {
    console.log("Отправка изменений")
    console.log()
    this.selected.emit(this.test)
  }
}
