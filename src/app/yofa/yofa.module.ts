import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YofaRoutingModule } from './yofa-routing.module';
import { YofaComponent } from './yofa.component';


@NgModule({
  declarations: [
    YofaComponent
  ],
  imports: [
    CommonModule,
    YofaRoutingModule
  ]
})
export class YofaModule { }
