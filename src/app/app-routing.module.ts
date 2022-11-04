import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'dynamic-create', loadChildren: () => import('./components/dynamic-create-component/dynamic-create-component.module').then(c => c.DynamicCreateComponentModule) },
  { path: 'custom-form', loadChildren: () => import('./components/custom-form-control/custom-form-control.module').then(c => c.CustomFormControlModule) },
  { path: 'common', loadChildren: () => import('./components/common/common.module').then(c => c.CommonDemoModule) },
  { path: 'i18n', loadChildren: () => import('./components/i18n/i18n.module').then(c => c.I18nModule) },
  { path: '', redirectTo: 'common', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
