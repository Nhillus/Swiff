import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelecionSeguroPageRoutingModule } from './selecion-seguro-routing.module';

import { SelecionSeguroPage } from './selecion-seguro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelecionSeguroPageRoutingModule
  ],
  declarations: [SelecionSeguroPage]
})
export class SelecionSeguroPageModule {}
