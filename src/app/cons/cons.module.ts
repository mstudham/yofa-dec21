import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsRoutingModule } from './cons-routing.module';
import { ConsComponent } from './cons.component';


@NgModule({
  declarations: [
    ConsComponent
  ],
  imports: [
    CommonModule,
    ConsRoutingModule
  ]
})
export class ConsModule { }
