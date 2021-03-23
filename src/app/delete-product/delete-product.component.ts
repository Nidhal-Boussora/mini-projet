import { Component, OnInit } from '@angular/core';
import {ProductService} from '../shared/product.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {
id;
  constructor(private productservice: ProductService , private activatedroute: ActivatedRoute , private at:Router) { }

  ngOnInit(): void {
    this.id = this.activatedroute.snapshot.params['id'];
    this.productservice.deletePost(this.id).subscribe(
      () => {alert('deleted'); 
      this.at.navigate(['/getProduct']);

    }
      
    );
  }

}
