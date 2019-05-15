import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {NavbarComponent} from './navbar/navbar.component';
import {LoginComponent} from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { ErrorComponent } from './error/error.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { BasketComponent } from './basket/basket.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    ErrorComponent,
    FooterComponent,
    ProductsListComponent,
    BasketComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
