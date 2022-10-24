import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicCreateComponentComponent } from './dynamic-create-component.component';
import { DemoComponent } from './components/demo/demo.component';
import { DynamicCreateComponentRoutingModule } from './dynamic-create-component-routing.module';
import { PortalModule } from '@angular/cdk/portal';


@NgModule({
  declarations: [
    DynamicCreateComponentComponent,
    DemoComponent
  ],
  imports: [
    CommonModule,
    DynamicCreateComponentRoutingModule,
    PortalModule,
  ]
})
export class DynamicCreateComponentModule { }
