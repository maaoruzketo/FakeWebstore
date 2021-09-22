import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { WONDComponent } from './pages/wond/wond.component';
import { KGComponent } from './pages/kg/kg.component';
import { CartComponent } from './pages/cart/cart.component';
import { ShippingComponent } from './pages/shipping/shipping.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { TYComponent } from './pages/ty/ty.component';

const routes: Routes = [
  { path: 'wond', component: WONDComponent },
  { path: 'cart', component: CartComponent },
  { path: 'kg', component: KGComponent },
  { path: 'login', component: LoginComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'shipping', component: ShippingComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'ty', component: TYComponent },

  { path: '',
    redirectTo: 'wond',
    pathMatch: 'full'
  },
  { path: '**', component: WONDComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
