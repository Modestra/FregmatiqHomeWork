import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UIModule } from './ui/ui.module';
import { ConventerModule } from './conventer/conventer.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UIModule, ConventerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    console.log("Test")
  }
}
