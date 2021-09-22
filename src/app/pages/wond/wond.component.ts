import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { IProduct } from 'src/app/shared/interfaces/iproduct';
import {CardComponent} from 'src/app/components/card/card.component';

@Component({
  selector: 'app-wond',
  templateUrl: './wond.component.html',
  styleUrls: ['./wond.component.scss']
})

export class WONDComponent implements OnInit {

  constructor(private dService: DataService) { }
  jutsus: IProduct[];
  ngOnInit() {
    this.jutsus = this.dService.getProducts();
    this.jutsus = this.jutsus.filter(x => x.pType = 'jutsu');
  }

}
