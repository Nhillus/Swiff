import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PruebausuarioPage } from './pruebausuario.page';

const routes: Routes = [
  {
    path: '',
    component: PruebausuarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PruebausuarioPageRoutingModule {}
