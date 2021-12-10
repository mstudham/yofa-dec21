import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsComponent } from './cons.component';

const routes: Routes = [{ path: '', component: ConsComponent }, { path: 'phones', loadChildren: () => import('./phones/phones.module').then(m => m.PhonesModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsRoutingModule { }
