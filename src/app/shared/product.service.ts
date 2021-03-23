import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

constructor(private http: HttpClient) { }

url = "http://localhost:3000/products";

  
  getProduct(){
    return this.http.get<ProductService[]>(this.url);
  }
  postProdct(p: Product){
    return this.http.post("http://localhost:3000/products", p);
  }
  
 
  deletePost(id){
    console.log(this.url+id);
    return this.http.delete("http://localhost:3000/products/" + id);
  }
  updateProduct(id,product){
    //console.log("http://localhost:3000/product/"+idf);
    return this.http.put("http://localhost:3000/products/"+id, product);
  }

}
