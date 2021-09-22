import { Component, OnInit } from '@angular/core';
import {CartService} from 'src/app/shared/services/cart.service';
import{IProduct} from 'src/app/shared/interfaces/iproduct';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  cartCount = 0;
  cartItems: IProduct[] =[];
  showList = false;
  cartTotal = 0;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.$cartItems.subscribe(items => {
      this.cartItems = items;
    });

    this.cartService.$cartTotal.subscribe(total => {
      this.cartTotal = total;
    });

    this.cartService.$cartQuantity.subscribe(count => {
      this.cartCount = count;
    });

  }

  toggleList(){
    this.showList = !this.showList;
  }

  removeFromCart(item, index){
    this.cartService.removeProduct(item, index);
  }

  // checkOut(){
  //   if(this.cartItems.length>0){

  //   }else if(this.cartItems.length<0){
  //     this.
  //   }
  // }
}
