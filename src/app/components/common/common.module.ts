import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonRoutingModule } from './common-routing.module';
import { CommonComponent } from './common/common.component';
import { BrowserTransferStateModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    CommonComponent
  ],
  imports: [
    CommonModule,
    CommonRoutingModule,
    BrowserTransferStateModule
  ]
})
export class CommonDemoModule { }
