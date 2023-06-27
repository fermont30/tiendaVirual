import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {

  constructor(private router: Router) {}

  // para el ejemplo de input
  pageTitle = 'Nuevos Productos';


  // para el ejemplo de output
  onTitleClick() {
    this.router.navigate(['/nuevo']);
  }

}
