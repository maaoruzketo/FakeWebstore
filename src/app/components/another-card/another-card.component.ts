import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { IProduct } from 'src/app/shared/interfaces/iproduct';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-another-card',
  templateUrl: './another-card.component.html',
  styleUrls: ['./another-card.component.scss']
})
export class AnotherCardComponent implements OnInit {
  jutsus: IProduct[];
  constructor(private dService: DataService, private cartService: CartService) { }

  ngOnInit() {
    this.jutsus = this.dService.getProducts();
    this.jutsus = this.jutsus.filter(x => parseInt(x.id) < 5);
  }

  addToCart(product){
    this.cartService.addItemsToCart(product);
  }
}
