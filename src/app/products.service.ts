import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Product from './model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  uri = 'http://localhost:3000/products';
  constructor(private http: HttpClient) { }

  addProduct(ProductName: string, ProductDescription: string, ProductPrice: number) {
    const obj = {
      ProductName,
      ProductDescription,
      ProductPrice
    };
    console.log(obj);
    this.http.post(`${this.uri}`, obj)
      .subscribe(res => console.log('Done'));
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.uri}`);
  }

  editProduct(id: number): Observable<Product> {
    return this
      .http
      .get<Product>(`${this.uri}/${id}`);
  }

  updateProduct(ProductName: string, ProductDescription: string, ProductPrice: number, id: number): Observable<Product> {
    const obj = {
      id,
      ProductName,
      ProductDescription,
      ProductPrice
    };
    return this.http.put<Product>(`${this.uri} /${id}`, obj);
  }

  deleteProduct(id: number) : Observable<Product>{
    return this
    .http
    .get <Product> (`${this.uri}/${id}`);
    }
}
