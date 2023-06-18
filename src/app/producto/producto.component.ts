import { Component } from '@angular/core';
import { products } from 'src/assets/data/data';
import { Product } from 'src/assets/data/productoInterface';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
})
export class ProductoComponent {
  productList: Product[] = products;
  filteredProducts: Product[] = [];
  searchTerm: string = '';

  constructor(
    private productService: ProductService,
    private router: Router,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.productList = this.productService.getProducts();
    this.filteredProducts = this.productList;
  }

  openProductDetails(product: Product) {
    this.router.navigate(['product', product.id]);
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }

  searchProducts() {
    if (this.searchTerm.trim() === '') {
      this.filteredProducts = this.productList;
    } else {
      this.filteredProducts = this.productList.filter((product) =>
        product.titulo.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }
}
