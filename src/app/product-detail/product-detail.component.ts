import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from 'src/assets/data/productoInterface';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
})
export class ProductDetailComponent implements OnInit {

  product: Product | undefined;
  id!: number;
  message ='';
  expandDescription = false;


  constructor(private route: ActivatedRoute, private productService: ProductService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const productId = Number(params['id']);
      this.product = this.productService.getProductById(productId);
      window.scrollTo(0, 0);
    });
  }

  receiveMessage(message: string) {
    this.message = message;
  }

}
