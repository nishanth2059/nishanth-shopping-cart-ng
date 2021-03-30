import { addedProducts } from './../addedProducts';
import { Router } from '@angular/router';
import { products } from './../products';
import { Component, Input, OnInit } from '@angular/core';

interface cartProduct {
  "title": string;
  "quantity": number;
  "price": number;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  addedProducts: any = addedProducts;
  products = products;
  constructor(private route: Router) { }

  ngOnInit() {
    /**const localStr: any = localStorage.getItem("shopCart");
    let cartList = JSON.parse(localStr);
    if (cartList)
      this.addedProducts = cartList;*/
  }

  changeProductQuantity(event, existingProd) {
    let newValue = event.target.value;
    newValue = Number.parseInt(newValue);
    let index = this.addedProducts.indexOf(existingProd);
    let prod: cartProduct = this.addedProducts[index];
    let ischange: boolean = false;
    for (let product of this.products) {
      if (prod.title == product.itemName) {
        if (newValue > 0 && newValue <= product.availableQuantity + prod.quantity) {
          let avaQuantity = product.availableQuantity + prod.quantity - newValue;
          prod.price = (prod.price / prod.quantity) * newValue;
          prod.quantity = newValue;
          //  prod.price *= prod.quantity;
          product.availableQuantity = avaQuantity;
          ischange = true;
          break;
        } else if (newValue == 0) {
          event.target.value = prod.quantity;
          alert("Not a Valid Input, Quantity must be more than 0");
          break;
        }
        else {
          event.target.value = prod.quantity;
          alert("Quantity exceeds than available quantity");
          break;
        }
      }
    }
    //  if (ischange)
    //   this.storeDataInSession(this.addedProducts)
  }

  storeDataInSession(cartList) {
    localStorage.setItem('shopCart', JSON.stringify(cartList));
  }

  buyProduct(existingProd) {
    let index = this.addedProducts.indexOf(existingProd);
    this.addedProducts.splice(index, 1);
    for (let product of this.products) {
      if (existingProd.title == product.itemName) {
        product.availableQuantity += existingProd.quantity;
        break;
      }
    }
    this.route.navigateByUrl("/root");
  }

}
