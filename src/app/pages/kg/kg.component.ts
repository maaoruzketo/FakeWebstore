import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { IProduct } from 'src/app/shared/interfaces/iproduct';

@Component({
  selector: 'app-kg',
  templateUrl: './kg.component.html',
  styleUrls: ['./kg.component.scss']
})
export class KGComponent implements OnInit {

  constructor(private dService: DataService) { }
  genetics: IProduct[];
  ngOnInit() {
    // this.genetics = this.dService.getProducts();
    // this.genetics = this.genetics.filter(x => parseInt(x.id) > 4);
    // console.log(this.genetics);
  }

}
