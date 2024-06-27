import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiMoneyService } from './services/api-money.service';
import { ConventerModule } from './conventer/conventer.module';
import { Valutes } from './entity/vatues';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ConventerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  public moneylist: Valutes[] | undefined = []
  constructor(private _money: ApiMoneyService) {

  }
  ngOnInit(): void {
    this._money.getValutes().subscribe((resp) => {
      this.moneylist = Object.values(resp.Valute)
      console.log(this.moneylist)
    })
  }

}
