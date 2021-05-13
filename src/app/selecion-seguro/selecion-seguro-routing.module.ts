import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelecionSeguroPage } from './selecion-seguro.page';

const routes: Routes = [
  {
    path: '',
    component: SelecionSeguroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelecionSeguroPageRoutingModule {}
