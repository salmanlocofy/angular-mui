import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import {
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
  @Input() label: string = 'label';
  @Input() placeholder: string = 'placeholder';
  @Input() value: string = '';
  @Input() className: string = '';
  @Input() appearance: 'outline' | 'fill' = 'fill';
  @Input() leftIcon: string | null = null;
  @Input() rightIcon: string | null = null;
  @Input() hintText: string = '';
  @Input() fullWidth: boolean = false;

  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();

  onInputChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.valueChange.emit(inputElement.value);
  }
}
