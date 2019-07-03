import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MatButtonModule} from '@angular/material';
import { CompaniesComponent } from './companies/companies.component';
import { ProductsComponent } from './products/products.component';
import {RouterModule} from '@angular/router';
import {appRoutes} from './route';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from '@angular/common/http';
import {HttpService} from './service';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    CompaniesComponent,
    ProductsComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
