import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-custom-form-control',
  templateUrl: './custom-form-control.component.html',
  styleUrls: ['./custom-form-control.component.scss'],
})
export class CustomFormControlComponent implements OnInit {
  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      input: [''],
    });
  }

  getFormControl(name: string): AbstractControl | null {
    return this.form.controls[name];
  }

  onRestValue() {
    this.getFormControl('input')?.setValue('reset');
  }
}
