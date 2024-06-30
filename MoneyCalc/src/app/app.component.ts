import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiMoneyService } from './services/api-money.service';
import { ConventerModule } from './conventer/conventer.module';
import { Valutes } from './entity/vatues';
import { Observable, take } from 'rxjs';
import { State, Store, select } from '@ngrx/store';
import { SetConvert } from './reducers/convert/convert.actions';
import { MainpageComponent } from './mainpage/mainpage.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ConventerModule, MainpageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  public moneylist: Valutes[] | undefined = []
  private store = inject(Store)
  conventer$?: Observable<any[]>;
  constructor(private _money: ApiMoneyService) {

  }
  ngOnInit(): void {
    this._money.getValutes().subscribe((resp) => {
      this.moneylist = Object.values(resp.Valute)
      console.log(this.moneylist)
    })
  }

  CreateContainer() {
    //this.store.dispatch(SetConvert())
  }

}
