import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoComponent } from './producto/producto.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CarritoComponent } from './carrito/carrito.component';
import { LoginComponent } from './login/login.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import { NuevoDetailComponent } from './nuevo-detail/nuevo-detail.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'productos', component: ProductoComponent},
  { path: 'product/:id', component: ProductDetailComponent },
  { path: 'carrito', component: CarritoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'nuevo', component: NuevoComponent },
  { path: 'nuevo-detalle/:id', component: NuevoDetailComponent },
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
