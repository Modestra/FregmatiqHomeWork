import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConventerModule } from './conventer/conventer.module';
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
    localStorage.setItem('coupes', '')
  }
  ngOnInit(): void {

  }

}
