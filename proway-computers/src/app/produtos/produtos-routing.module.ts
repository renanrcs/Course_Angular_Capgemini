import { ProductDetailComponent } from './product-detail/product-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutosComponent } from './produtos.component';

const routes: Routes = [
  { path: '', component: ProdutosComponent },
  { path: 'id', component: ProductDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutosRoutingModule { }
