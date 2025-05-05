import { Component, forwardRef, HostListener } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

/**
 * custom form control component
 */

@Component({
  selector: 'app-fake-input',
  templateUrl: './fake-input.component.html',
  styleUrls: ['./fake-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FakeInputComponent),
      multi: true,
    },
  ],
})
export class FakeInputComponent implements ControlValueAccessor {
  value: string | null = '';

  _onChange: (fn: any) => void = (fn: any) => {};
  _onTouch: (fn: any) => void = (fn: any) => {};

  @HostListener('change', ['$event'])
  onChange(event: KeyboardEvent) {
    if (event.target) {
      this.value += event.key;
      this._onChange(this.value);
    }
  }

  @HostListener('keyup', ['$event'])
  onKeydownChange(event: KeyboardEvent) {
    if (event.target) {
      this.value += event.key;
      this._onChange(this.value);
    }
  }

  constructor() {}

  writeValue(value: string | null): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this._onTouch = fn;
  }
}
