import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ProductoComponent } from './producto/producto.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductService } from './services/product.service';
import { CarritoComponent } from './carrito/carrito.component';
import { CartService } from './services/cart.service';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductoComponent,
    HomeComponent,
    ProductDetailComponent,
    CarritoComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    IonicModule.forRoot()
  ],
  providers: [ProductService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
