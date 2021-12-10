import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhonesComponent } from './phones.component';

const routes: Routes = [{ path: '', component: PhonesComponent }, { path: 'editp', loadChildren: () => import('./editp/editp.module').then(m => m.EditpModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhonesRoutingModule { }
