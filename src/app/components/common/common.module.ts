import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonRoutingModule } from './common-routing.module';
import { CommonComponent } from './common/common.component';
import { BrowserTransferStateModule } from '@angular/platform-browser';
import { TestComponent } from './test/test.component';


@NgModule({
  declarations: [
    CommonComponent,
    TestComponent
  ],
  imports: [
    CommonModule,
    CommonRoutingModule,
    BrowserTransferStateModule
  ]
})
export class CommonDemoModule { }
