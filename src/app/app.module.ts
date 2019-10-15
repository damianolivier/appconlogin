import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule, routing, appRoutingProviders } from './app-routing.module';import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListadoClientesComponent } from './listado-clientes/listado-clientes.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { ContactoComponent } from './contacto/contacto.component';

// Importar HttpClientModule
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { LoginService } from './services/login.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListadoClientesComponent,
    FooterComponent,
    HomeComponent,
    MenuComponent,
    ContactoComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing,
    FormsModule,
    HttpClientModule
  ],
  providers: [appRoutingProviders, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
