import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CalendarioPage } from './calendario.page';

import { CalendarioPageRoutingModule } from './calendario-routing.module';

import { NgCalendarModule  } from 'ionic2-calendar';
import { CalModalPageModule } from '../cal-modal/cal-modal.module';
 
import { registerLocaleData } from '@angular/common';
import LOCALE_ID from '@angular/common/locales/es';
registerLocaleData(LOCALE_ID);


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalendarioPageRoutingModule,
    NgCalendarModule,
    CalModalPageModule
  ],
  declarations: [CalendarioPage],
  providers: [ 
    { provide: LOCALE_ID, useValue: 'es-ES' }
  ]
})
export class CalendarioPageModule {}
