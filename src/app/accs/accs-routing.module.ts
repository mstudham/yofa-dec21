import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccsComponent } from './accs.component';

const routes: Routes = [{ path: '', component: AccsComponent }, { path: 'accs/detail', loadChildren: () => import('./detail/detail.module').then(m => m.DetailModule) }, { path: 'report', loadChildren: () => import('./report/report.module').then(m => m.ReportModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccsRoutingModule { }
