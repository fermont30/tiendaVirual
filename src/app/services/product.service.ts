import { Injectable } from '@angular/core';
import { products } from 'src/assets/data/data';
import { Product } from 'src/assets/data/productoInterface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productList: Product[] = [];
  filteredProducts: Product[] = [];

  constructor() {
    this.productList = products;
  }

  searchProducts(searchTerm: string) {
    this.filteredProducts = this.productList.filter(product =>
      product.titulo.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  getFilteredProducts() {
    return this.filteredProducts;
  }

  getProducts(): Product[] {
    return this.productList;
  }

  getProductById(id: number) {
    return this.productList.find(product => product.id === id);
  }
  
}
