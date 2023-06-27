import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/assets/data/productoInterface';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  productList: Product[] = [];

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.productList = this.productService.getProducts();
    window.scrollTo(0, 0);
  }

  openProductDetails(product: Product) {
       this.router.navigate(['product', product.id]);
  }

}
