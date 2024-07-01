import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MainpageComponent } from './mainpage/mainpage.component';

export const routes: Routes = [
    {
        path: "",
        component: MainpageComponent
    },
    {
        path: "register",
        component: RegisterComponent
    },
    {
        path: 'login',
        component: LoginComponent
    }
];
