import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UIModule } from './ui/ui.module';
import { ApiMoneyService } from './services/api-money.service';
import { ConventerModule } from './conventer/conventer.module';
import { Valutes } from './entity/vatues';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UIModule, ConventerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{

  public moneylist: Valutes[] | undefined = []
  constructor(private _money: ApiMoneyService){

  }
  ngOnInit(): void {

  }
}
