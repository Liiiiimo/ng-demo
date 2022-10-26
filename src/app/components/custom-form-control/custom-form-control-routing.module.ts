import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomFormControlComponent } from './custom-form-control/custom-form-control.component';

const routes: Routes = [
  { path: '', component: CustomFormControlComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomFormControlRoutingModule { }
