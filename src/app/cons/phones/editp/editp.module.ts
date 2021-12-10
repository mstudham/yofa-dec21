import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditpRoutingModule } from './editp-routing.module';
import { EditpComponent } from './editp.component';


@NgModule({
  declarations: [
    EditpComponent
  ],
  imports: [
    CommonModule,
    EditpRoutingModule
  ]
})
export class EditpModule { }
