import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from '../login/login.component';
import {WelcomeComponent} from '../welcome/welcome.component';
import {CommonModule} from '@angular/common';
import {RegisterComponent} from '../register/register.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'register', component: RegisterComponent},

];

@NgModule({
  imports: [CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
