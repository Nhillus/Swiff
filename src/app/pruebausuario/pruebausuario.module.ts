import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PruebausuarioPageRoutingModule } from './pruebausuario-routing.module';

import { PruebausuarioPage } from './pruebausuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PruebausuarioPageRoutingModule
  ],
  declarations: [PruebausuarioPage]
})
export class PruebausuarioPageModule {}
