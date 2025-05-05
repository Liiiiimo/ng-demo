import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent } from './child/child.component';
import { StoreModule } from '@ngrx/store';
import { childReducor } from '../store/child/child.reductor';
import { ChildRoutingModule } from './child-routing.module';
import { CHILD_STATE_KEY } from '../store/child/child.selector';

@NgModule({
  declarations: [ChildComponent],
  imports: [CommonModule, ChildRoutingModule, StoreModule.forFeature(CHILD_STATE_KEY, childReducor)],
})
export class ChildModuleModule {}
