import {Component, OnInit} from '@angular/core';
import {Product} from '../model/Product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  product1 = new Product(1, 'kask', 25.50, new Date());
  product2 = new Product(2, 'lina', 15.50, new Date());
  product3 = new Product(3, 'buty', 10.50, new Date());
  ł;

  products = [];

  constructor() {
    this.products.push(this.product1, this.product2, this.product3);
  }

  ngOnInit() {
  }

}
