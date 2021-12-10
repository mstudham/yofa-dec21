import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccsRoutingModule } from './accs-routing.module';
import { AccsComponent } from './accs.component';


@NgModule({
  declarations: [
    AccsComponent
  ],
  imports: [
    CommonModule,
    AccsRoutingModule
  ]
})
export class AccsModule { }
