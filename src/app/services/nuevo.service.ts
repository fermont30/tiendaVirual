import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Nuevo } from 'src/assets/data/nuevoInterface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NuevoService {


  private apiUrl = 'https://fakestoreapi.com/products';

  productList: Nuevo[] = [];
  filteredProducts: Nuevo[] = [];

  constructor(private http: HttpClient) {}

  searchProducts(searchTerm: string) {
    this.filteredProducts = this.productList.filter(product =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  getFilteredProducts() {
    return this.filteredProducts;
  }

  getProducts(): Observable<Nuevo[]> {
    return this.http.get<Nuevo[]>(this.apiUrl);
  }

  getProductById(id: number): Observable<Nuevo> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Nuevo>(url);
  }

}
