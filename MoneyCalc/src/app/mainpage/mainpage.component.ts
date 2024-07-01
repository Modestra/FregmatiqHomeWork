import { Component, OnInit, inject } from '@angular/core';
import { Observable, take } from 'rxjs';
import { State, Store, select } from '@ngrx/store';
import { Valutes } from '../entity/vatues';
import { FormsModule } from '@angular/forms';
import { ConventerComponent } from "../conventer/conventer.component";
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ApiMoneyService } from '../services/api-money.service';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-mainpage',
  standalone: true,
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.scss',
  imports: [FormsModule, ConventerComponent, RouterLink, RouterLinkActive, RouterOutlet, FormComponent]
})
export class MainpageComponent implements OnInit {

  public moneylist: Valutes[] | undefined = []
  private store = inject(Store)
  constructor(private route: Router, private _money: ApiMoneyService) {

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

  DedicateTo(){
    this.route.navigate(['/register'])
  }

}
