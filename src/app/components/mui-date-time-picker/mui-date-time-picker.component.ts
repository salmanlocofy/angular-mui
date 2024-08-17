import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

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
    MatIconModule
  ],
})
export class MuiDateTimePickerComponent {
  @Input() placeholder: string = 'Select a date';
  @Input() value: Date | null = null;
  @Input() disabled: boolean = false;
  @Input() appearance: 'outline' | 'fill' = 'fill';
  @Input() leftIcon: string | null = null;
  @Input() fullWidth: boolean = false;

  @Output() valueChange = new EventEmitter<Date | null>();

  onDateChange(event: any) {
    this.valueChange.emit(event.value);
  }
}
