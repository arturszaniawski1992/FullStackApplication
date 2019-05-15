import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from '../login/login.component';
import {WelcomeComponent} from '../welcome/welcome.component';
import {CommonModule} from '@angular/common';
import {RegisterComponent} from '../register/register.component';
import {ErrorComponent} from '../error/error.component';
import {ProductsListComponent} from '../products-list/products-list.component';
import {BasketComponent} from '../basket/basket.component';
import {ProductDetailComponent} from '../product-detail/product-detail.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'welcome/:name', component: WelcomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'products', component: ProductsListComponent},
  {path: 'basket', component: BasketComponent},
  {path: 'product', component: ProductDetailComponent},
  {path: '**', component: ErrorComponent},

];

@NgModule({
  imports: [CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
