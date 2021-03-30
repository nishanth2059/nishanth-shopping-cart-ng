import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CartComponent } from './cart/cart.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { ShoppingPageComponent } from './shopping-page/shopping-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    NoPageFoundComponent,
    ShoppingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
