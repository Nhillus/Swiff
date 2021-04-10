import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodosDocumentosPage } from './todos-documentos.page';

const routes: Routes = [
  {
    path: '',
    component: TodosDocumentosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodosDocumentosPageRoutingModule {}
