import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgrxDemoRoutingModule } from './ngrx-demo-routing.module';
import { RootComponent } from './root/root.component';
import { rootReducer } from './store/root/root.reducer';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

const reductors = {
  rootReducer
};

@NgModule({
  declarations: [
    RootComponent
  ],
  imports: [
    CommonModule,
    NgrxDemoRoutingModule,
    StoreModule.forRoot(reductors),
    StoreDevtoolsModule.instrument({
      logOnly: true
    })
  ]
})
export class NgrxDemoModule { }
