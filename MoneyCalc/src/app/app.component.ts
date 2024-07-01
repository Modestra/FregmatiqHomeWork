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

  constructor() {

  }
  ngOnInit(): void {

  }

}
