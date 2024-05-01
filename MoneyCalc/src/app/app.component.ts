import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UIModule } from './ui/ui.module';
import { ConventerComponent } from './conventer/conventer.component';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UIModule, ConventerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
