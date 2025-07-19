import { Component } from "@angular/core";
import { RouterLink, RouterOutlet } from "@angular/router";
import { Login } from "./login/login";
import { Header } from "./header/header";
import { Product } from "./services/product";
import { product } from "./Interfaces/products";
import { ProductResponse } from "./Interfaces/productResponse";

@Component({
  selector: "app-root",
  imports: [Login, RouterOutlet, Header],
  templateUrl: "./app.html",
  styleUrl: "./app.css",
})
export class App {
  protected title = "First-Angular-Project";
  productData: product[] = [];

  constructor(private productServices: Product) {}

  // getProductData() {
  //   this.productData = this.productServices.getProductData();
  //   console.log(this.productData);
  // }

  getProductDataFromAPI() {
    this.productServices
      .getProductDataFromAPI()
      .subscribe((data: product[]) => {
        console.log(data);
        this.productData = data;
      });
  }
}
