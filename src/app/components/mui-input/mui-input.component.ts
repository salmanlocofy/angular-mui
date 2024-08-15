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
  @Input() placeholder: string = 'placeholder';
  @Input() value: string = '';
  @Input() className: string = '';
  @Input() appearance: 'outline' | 'fill' = 'fill';
  @Input() leftIcon: string | null = null; // Left icon name
  @Input() rightIcon: string | null = null; // Right icon
  @Input() hintText: string = '';

  // Output event emitter to notify parent of value changes
  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();

  // Method to handle changes in input value
  onInputChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.valueChange.emit(inputElement.value);
  }
}
