import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessWebsitesRoutingModule } from './business-websites-routing.module';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
@NgModule({
  declarations: [
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    BusinessWebsitesRoutingModule,
  ]
})
export class BusinessWebsitesModule { }
