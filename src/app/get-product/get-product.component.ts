import { Component, OnInit } from '@angular/core';
import {Product} from '../model/product';
import {ProductService} from '../shared/product.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-get-product',
  templateUrl: './get-product.component.html',
  styleUrls: ['./get-product.component.css']
})
export class GetProductComponent implements OnInit {
  product: Product[];
  products;
  constructor(private productService: ProductService, private activatedroute: ActivatedRoute) { }
title: any;
  ngOnInit(): void {
    this.productService.getProduct().subscribe((liste)=>{
      this.products=liste;  
  
  });

}


}