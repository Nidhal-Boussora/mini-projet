import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
id;
  constructor(private productservice: ProductService , private activatedroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.activatedroute.snapshot.params['id'];

  }
  updateProduct(f){
    console.log(this.id);
    
    this.productservice.updateProduct(this.id,f).subscribe(()=>{
      alert("updated");
    })
  }

}
