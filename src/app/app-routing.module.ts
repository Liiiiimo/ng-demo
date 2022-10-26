import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'dynamic-create', loadChildren: () => import('./components/dynamic-create-component/dynamic-create-component.module').then(c => c.DynamicCreateComponentModule) },
  { path: 'custom-form', loadChildren: () => import('./components/custom-form-control/custom-form-control.module').then(c => c.CustomFormControlModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
