import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { product } from "../Interfaces/products";
import { ProductResponse } from "../Interfaces/productResponse";

@Injectable({
  providedIn: "root",
})
export class Product {
  productList: any;
  constructor(private http: HttpClient) {
    console.log("product services");
  }

  getProductData() {
    return [
      { id: 1, name: "Mobile", brand: "Apple", price: 80000 },
      { id: 2, name: "MacBook", brand: "Apple", price: 200000 },
      { id: 3, name: "Washing Machine", brand: "Samsung", price: 50000 },
    ];
  }

  getProductDataFromAPI(): Observable<product[]> {
    const url = "https://dummyjson.com/products";
    return this.http
      .get<ProductResponse>(url)
      .pipe(map((response) => response.products));
  }
}
