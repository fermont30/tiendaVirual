import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {

  status = false;

  constructor(public cartService: CartService, private productService: ProductService) {}

  addToggle() {
    this.status = !this.status;
  }

  @Input() pageTitle = '';
  @Output() titleClickEvent = new EventEmitter<void>();

  onTitleClick() {
    this.titleClickEvent.emit();
  }


}
