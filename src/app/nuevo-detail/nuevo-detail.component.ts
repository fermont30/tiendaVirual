import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Nuevo } from 'src/assets/data/nuevoInterface';
import { NuevoService } from '../services/nuevo.service';

@Component({
  selector: 'app-nuevo-detail',
  templateUrl: './nuevo-detail.component.html',
})
export class NuevoDetailComponent implements OnInit {

  product: Nuevo | undefined;
  id!: number;
  expandDescription = false;

  constructor(private route: ActivatedRoute, private productService: NuevoService) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const productId = Number(params['id']);
      this.productService.getProductById(productId).subscribe((product) => {
        this.product = product;
        window.scrollTo(0, 0);
      });
    });
  }


}
