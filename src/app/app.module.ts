import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { FilltersComponent } from './components/shopping-cart/fillters/fillters.component';
import { ProductListComponent } from './components/shopping-cart/product-list/product-list.component';
import { CartComponent } from './components/shopping-cart/cart/cart.component';
import { CartItemComponent } from './components/shopping-cart/cart/cart-item/cart-item.component';
import { ProductItemComponent } from './components/shopping-cart/product-list/product-item/product-item.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdminRegistrationComponent } from './components/admin-registration/admin-registration.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    ShoppingCartComponent,
    FilltersComponent,
    ProductListComponent,
    CartComponent,
    CartItemComponent,
    ProductItemComponent,
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponent,
    AdminLoginComponent,
    AdminRegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }