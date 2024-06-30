import { Component, OnInit, inject } from '@angular/core';
import { Observable, take } from 'rxjs';
import { State, Store, select } from '@ngrx/store';
import { Valutes } from '../entity/vatues';
import { ServicesModule } from '../services/services.module';
import { FormsModule } from '@angular/forms';
import { ConventerComponent } from "../conventer/conventer.component";

@Component({
  selector: 'app-mainpage',
  standalone: true,
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.scss',
  imports: [FormsModule, ConventerComponent]
})
export class MainpageComponent {

  public moneylist: Valutes[] | undefined = []
  private store = inject(Store)
  constructor() {

  }

  CreateContainer() {
    //this.store.dispatch(SetConvert())
  }

}
