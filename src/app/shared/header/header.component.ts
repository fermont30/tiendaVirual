import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  status = false;
  searchTerm: string = '';

  constructor(public cartService: CartService, private productService: ProductService) {}

  addToggle() {
    this.status = !this.status;
  }

 
}
