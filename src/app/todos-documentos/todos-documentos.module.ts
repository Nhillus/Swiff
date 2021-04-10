import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TodosDocumentosPageRoutingModule } from './todos-documentos-routing.module';

import { TodosDocumentosPage } from './todos-documentos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TodosDocumentosPageRoutingModule
  ],
  declarations: [TodosDocumentosPage]
})
export class TodosDocumentosPageModule {}
