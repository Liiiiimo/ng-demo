import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomFormControlRoutingModule } from './custom-form-control-routing.module';
import { CustomFormControlComponent } from './custom-form-control/custom-form-control.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FakeInputComponent } from './components/fake-input/fake-input.component';

@NgModule({
  declarations: [FakeInputComponent, CustomFormControlComponent],
  imports: [CommonModule, CustomFormControlRoutingModule, FormsModule, ReactiveFormsModule],
})
export class CustomFormControlModule {}
