import { Component } from '@angular/core';

import { Product } from 'src/assets/data/productoInterface';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
})
export class CarritoComponent {
  cartItems: Product[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
  }

  removeFromCart(product: Product) {
    this.cartService.removeFromCart(product);
  }

  getTotalPrice(): number {
    return this.cartService.getTotalPrice();
  }
}
