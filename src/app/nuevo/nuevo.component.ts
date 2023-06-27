import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Nuevo } from 'src/assets/data/nuevoInterface';
import { NuevoService } from '../services/nuevo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
})
export class NuevoComponent implements OnInit, OnDestroy {
  
  products: Nuevo[] = [];
  filteredProducts: Nuevo[] = [];
  searchTerm = '';

  private productSubscription: Subscription | undefined;

  constructor(private nuevoService: NuevoService, private router: Router) {}

  ngOnInit() {
    this.getProducts();
  }

  searchProducts(): void {
    if (this.searchTerm.trim() === '') {
      this.filteredProducts = [...this.products];
    } else {
      this.filteredProducts = this.products.filter((product) =>
        product.title.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }

  openProductDetails(product: Nuevo) {
    this.router.navigate(['nuevo-detalle', product.id]);
  }

  getProducts() {
    this.productSubscription = this.nuevoService.getProducts().subscribe(
      (data) => {
        this.products = data;
        this.filteredProducts = [...this.products];
      },
      (error) => {
        console.error('Error fetching products', error);
      }
    );
  }

  ngOnDestroy() {
    if (this.productSubscription) {
      this.productSubscription.unsubscribe();
    }
  }
}
