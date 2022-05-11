import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { DeleteProductComponent } from './product/delete-product/delete-product.component';
import { ProductComponent } from './product/product.component';
import { UpdateProductComponent } from './product/update-product/update-product.component';
import { ViewallProductComponent } from './product/viewall-product/viewall-product.component';
import { ServicesComponent } from './services/services.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'aboutus', component: AboutComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'contact', component: ContactComponent},
  
  /*
  {path: 'product', component: ProductComponent},
  {path: 'product/add', component: AddProductComponent},
  {path: 'product/viewall', component: ViewallProductComponent},
  {path: 'product/update', component: UpdateProductComponent},
  {path: 'product/delete', component: DeleteProductComponent},  
  */
  

  
  {path: 'product', component: ProductComponent, 
    children: [
      {path: 'add', component: AddProductComponent},
      {path: 'viewall', component: ViewallProductComponent},
      {path: 'update/:id', component: UpdateProductComponent},
     
      {path: 'delete', component: DeleteProductComponent}, 

    ]
  },
  
   


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
