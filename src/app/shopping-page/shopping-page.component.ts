import { addedProducts } from './../addedProducts';
import { products } from './../products';
import { product } from './../product';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-page',
  templateUrl: './shopping-page.component.html',
  styleUrls: ['./shopping-page.component.css']
})
export class ShoppingPageComponent implements OnInit {
  searchInput: string;
  searchText;
  itemsNo: number = 0;
  addedProducts: any[] = addedProducts;
  products = products;
  constructor(private route: Router) { }

  ngOnInit() {
    this.itemsNo = this.addedProducts.length;
    /** const localStr: any = localStorage.getItem("shopCart");
     let cartList = JSON.parse(localStr);
     if (cartList)
       this.addedProducts = cartList; */
  }

  search() {
    if (this.searchInput.length >= 3)
      this.searchText = this.searchInput;
    else
      this.searchText = "";
  }

  addProduct(product: product) {
    let newProduct = {
      "title": product.itemName,
      "price": product.price,
      "quantity": 1
    }
    let isNew: boolean = true;
    for (let key in this.addedProducts) {
      let prod = this.addedProducts[key];
      if (prod.title == product.itemName) {
        // if (prod.quantity < product.availableQuantity) {
        //let quantity = prod.quantity +1;
        prod.quantity += 1;
        product.availableQuantity -= 1;
        prod.price *= prod.quantity;
        /**newProduct = {
           "title" : prod.title,
           "price": prod.price * quantity,
           "quantity": quantity
         }*/
        // this.addedProducts.pop(prod); 
        isNew = false;
        break;
        /**} else {
          alert("No product available");
          isNew = false;
          break;
        }*/
      }
    };
    if (isNew) {
      this.addedProducts.push(newProduct);
      product.availableQuantity -= 1;
      this.itemsNo++;
    }
    //  this.storeDataInSession(this.addedProducts)
  }

  removeProduct(product: product) {

    let index = this.addedProducts.indexOf(product);
    this.addedProducts.splice(index, 1);
    //  this.storeDataInSession(this.addedProducts);
    this.itemsNo--;
  }

  storeDataInSession(cartList) {
    localStorage.setItem('shopCart', JSON.stringify(cartList));
  }

  gotoCart() {
    this.route.navigateByUrl('/cart');
  }

}
