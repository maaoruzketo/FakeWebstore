import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { IProduct } from 'src/app/shared/interfaces/iproduct';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  genetics: IProduct[];
  constructor(private dService: DataService, private cartService: CartService) { }

  ngOnInit() {
    this.genetics = this.dService.getProducts();
    this.genetics = this.genetics.filter(x => parseInt(x.id) > 4);
  }

  addToCart(product){
    this.cartService.addItemsToCart(product);
  }
}
