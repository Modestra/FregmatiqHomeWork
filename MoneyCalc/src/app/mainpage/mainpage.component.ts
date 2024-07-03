import { AfterViewChecked, Component, ComponentRef, OnInit, QueryList, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';
import { ConvertCoupe, Valutes } from '../entity/vatues';
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
  //Inject по шаблонному компоненту
  @ViewChild('container', { read: ViewContainerRef }) container?: ViewContainerRef;
  //Пройтись по дереву и определить компоненты класса контейнера
  @ViewChildren(ConventerComponent) childConventers?: QueryList<ConventerComponent>;
  public moneylist: Valutes[] | undefined = [];
  convertcoupe: ConvertCoupe[] = [];
  constructor(private route: Router, private _money: ApiMoneyService) {
    localStorage.setItem("convertcoupe", this.convertcoupe.toString());
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
  }
  SaveContainer() {
  }
  DedicateTo() {
    this.route.navigate(['/register'])
  }

}
