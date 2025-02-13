import { AfterContentChecked, AfterContentInit, Component, ContentChild } from '@angular/core';
import { ConventerComponent } from '../conventer/conventer.component';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-convertgroup',
  standalone: true,
  imports: [MatDividerModule],
  templateUrl: './convertgroup.component.html',
  styleUrl: './convertgroup.component.scss'
})
export class ConvertgroupComponent implements AfterContentInit, AfterContentChecked {

  @ContentChild(ConventerComponent) conventerComponent: ConventerComponent | undefined;

  ngAfterContentInit(): void {
    console.log("Инициализация контента", this.conventerComponent)
  }

  ngAfterContentChecked(): void {
    console.log("Обновление контента", this.conventerComponent)
  }
}
