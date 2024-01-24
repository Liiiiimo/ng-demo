import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonComponent } from './common/common.component';

const routes: Routes = [
  {
    path: '', component: CommonComponent, pathMatch: 'full',
    data: { value: 1 }
  },
  { path: 'test/:id', component: CommonComponent, data: { value: 2 } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommonRoutingModule { }
