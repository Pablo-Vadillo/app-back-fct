import { Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component'
import { RegisterComponent } from './views/register/register.component'
import { MenuComponent } from './views/menu/menu.component'

export const routes: Routes = [
    {path: "", redirectTo: "login", pathMatch: "full"},
    { path: "register", component: RegisterComponent},
    { path: "login", component: LoginComponent},
    { path: "menu", component: MenuComponent}
];
