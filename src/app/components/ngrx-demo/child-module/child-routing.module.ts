import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent } from './child/child.component';
import { StoreModule } from '@ngrx/store';
import { childReducor } from '../store/child/child.reductor';
import { RouterModule, Routes } from '@angular/router';

const router: Routes = [{ path: '', component: ChildComponent, pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forChild(router)],
  exports: [RouterModule],
})
export class ChildRoutingModule {}
