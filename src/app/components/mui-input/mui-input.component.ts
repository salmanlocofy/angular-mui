import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import {
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
  MatFormFieldModule,
} from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mui-input',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatIconModule, CommonModule],
  templateUrl: './mui-input.component.html',
  styleUrls: ['./mui-input.component.css'],
})
export class MuiInputComponent {
  // Input properties for label, placeholder, value, and full-width option
  @Input() label: string = 'label';
  @Input() showLabel: boolean = false;
  @Input() placeholder: string = 'placeholder';
  @Input() value: string = '';
  @Input() disabled: boolean = false;
  @Input() className: string = '';
  @Input() appearance: 'outline' | 'fill' = 'fill';
  @Input() leftIcon: string = ''; // Left icon name
  @Input() rightIcon: string = ''; // Right icon
  @Input() showRightIcon: boolean = false;
  @Input() showLeftIcon: boolean = false;
  @Input() hintText: string = '';
  @Input() showHintText: boolean = false;

  // Output event emitter to notify parent of value changes
  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();

  // Method to handle changes in input value
  onInputChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.valueChange.emit(inputElement.value);
  }
}
