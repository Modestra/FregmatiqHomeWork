import { Component, OnInit, QueryList, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';
import { ConvertCoupe, Valutes } from '../entity/vatues';
import { FormsModule } from '@angular/forms';
import { ConventerComponent } from "../conventer/conventer.component";
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ApiMoneyService } from '../services/api-money.service';
import { FormComponent } from '../form/form.component';
import { ConvertgroupComponent } from "../convertgroup/convertgroup.component";

@Component({
  selector: 'app-mainpage',
  standalone: true,
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.scss',
  imports: [FormsModule, ConventerComponent, FormComponent, ConvertgroupComponent]
})
export class MainpageComponent implements OnInit {
  //Inject по шаблонному компоненту
  @ViewChild('container', { read: ViewContainerRef }) container?: ViewContainerRef;
  //Пройтись по дереву и определить компоненты класса контейнера
  @ViewChildren(ConventerComponent) childConventers?: QueryList<ConventerComponent>;
  public moneylist: Valutes[] | undefined = [];

  //Основная форма для сохранённых пар чисел
  public convertcoupe: ConvertCoupe[] = [];

  constructor(private route: Router, private _money: ApiMoneyService) {

  }

  //Хуки
  ngOnInit(): void {
    this._money.getValutes().subscribe((resp) => {
      this.moneylist = Object.values(resp.Valute)
    })
  }

  CreateContainer() {
    const component = this.container?.createComponent(ConventerComponent);
    component?.setInput('MoneyCourse', this.moneylist);
    component?.setInput('MoneyResult', this.moneylist);
    this.childConventers?.reset([...this.childConventers, component?.instance as ConventerComponent])
  }

  SaveContainer() {
    this.convertcoupe = [];
    this.childConventers?.forEach((coupe) => {
      this.convertcoupe.push(coupe.convertCoupe)
    })
  }

  DedicateTo() {
    this.route.navigate(['/register'])
  }

}
