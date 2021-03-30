import { ShoppingPageComponent } from './shopping-page/shopping-page.component';
import { CartComponent } from './cart/cart.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';


const routes: Routes = [
  { path: "", redirectTo: "/root", pathMatch: "full" },
  { path: "root", component: ShoppingPageComponent },
  { path: "cart", component: CartComponent },
  { path: "**", component: NoPageFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
