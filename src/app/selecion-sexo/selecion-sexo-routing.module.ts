import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelecionSexoPage } from './selecion-sexo.page';

const routes: Routes = [
  {
    path: '',
    component: SelecionSexoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelecionSexoPageRoutingModule {}
