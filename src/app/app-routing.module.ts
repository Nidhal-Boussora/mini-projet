import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductComponent} from './product/product.component';
import {AddProductComponent} from './add-product/add-product.component';
import {DeleteProductComponent} from './delete-product/delete-product.component';
import { GetProductComponent } from './get-product/get-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';


const routes: Routes = [

  { path: '', component: GetProductComponent , pathMatch:'full'},
  { path: 'del/:id', component: DeleteProductComponent},
  { path: 'addProduct', component: AddProductComponent},
  { path: 'getProduct', component: GetProductComponent},
  { path: 'update/:id', component: UpdateProductComponent}
  

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
