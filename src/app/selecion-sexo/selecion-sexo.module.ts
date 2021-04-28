import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelecionSexoPageRoutingModule } from './selecion-sexo-routing.module';

import { SelecionSexoPage } from './selecion-sexo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelecionSexoPageRoutingModule
  ],
  declarations: [SelecionSexoPage]
})
export class SelecionSexoPageModule {}
