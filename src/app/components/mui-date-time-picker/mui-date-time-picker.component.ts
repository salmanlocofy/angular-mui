import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'mui-date-time-picker',
  standalone: true,
  templateUrl: './mui-date-time-picker.component.html',
  styleUrls: ['./mui-date-time-picker.component.css'],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    FormsModule,
  ],
})
export class MuiDateTimePickerComponent {
  @Input() placeholder: string = 'Select a date'; // Placeholder text
  @Input() value: Date | null = null; // Selected date value
  @Input() disabled: boolean = false; // Disable the picker
  @Input() appearance: 'outline' | 'fill' = 'fill';

  @Output() valueChange = new EventEmitter<Date | null>(); // EventEmitter for date changes

  onDateChange(event: any) {
    this.valueChange.emit(event.value);
  }
}
