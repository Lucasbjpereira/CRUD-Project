//Importando componentes que necessitam de rotas

import { ProductCreateComponent } from './components/products/product-create/product-create.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';


const routes: Routes = [ //Configurações de rotas
  {
    path: "", //url da rota
    component: HomeComponent
  },
  {
    path: "products", //url da rota
    component: ProductCrudComponent
  },
  {
    path: "products/create", //url da rota
    component: ProductCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
