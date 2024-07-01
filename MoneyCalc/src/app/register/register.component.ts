import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ConventerComponent } from '../conventer/conventer.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, ConventerComponent, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  constructor(private router: Router){

  }
  
  RouteToMain(){
    this.router.navigate(['/'])
  }
}
