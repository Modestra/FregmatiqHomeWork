import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ConventerComponent } from '../conventer/conventer.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ConventerComponent, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private router: Router){

  }

  RouteToMain(){
    this.router.navigate(['/'])
  }
}
