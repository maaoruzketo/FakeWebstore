import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { HeaderComponent } from './components/header/header.component';
import { CartComponent } from './pages/cart/cart.component';
import { LoginComponent } from './pages/login/login.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { ShippingComponent } from './pages/shipping/shipping.component';
import { TYComponent } from './pages/ty/ty.component';
import { KGComponent } from './pages/kg/kg.component';
import { WONDComponent } from './pages/wond/wond.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from './components/modal/modal.component';
import { AnotherCardComponent } from './components/another-card/another-card.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HeaderComponent,
    CartComponent,
    LoginComponent,
    SignInComponent,
    PaymentComponent,
    ShippingComponent,
    TYComponent,
    KGComponent,
    WONDComponent,
    ModalComponent,
    AnotherCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
