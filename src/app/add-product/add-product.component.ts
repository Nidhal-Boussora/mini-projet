import { Component, OnInit } from '@angular/core';
import {Product} from '../model/product';
import {ProductService} from '../shared/product.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  

  ListProduct: Product[];
  product: Product;
  
  constructor(private productService: ProductService, private activatedroute: ActivatedRoute ,private  at: Router) { }

  ngOnInit(): void {
  }

  
  addProduct(f){
    console.log(f);
    this.productService.postProdct(f).subscribe(()=>{
      alert("produit ajouté avec succes !");
      this.at.navigate(['/getProduct']);

    });
}

}