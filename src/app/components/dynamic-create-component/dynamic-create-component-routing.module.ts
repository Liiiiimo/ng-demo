import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicCreateComponentComponent } from './dynamic-create-component.component';

const routes: Routes = [{ path: '', component: DynamicCreateComponentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DynamicCreateComponentRoutingModule {}
