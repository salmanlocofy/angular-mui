import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  MatDatepicker,
  MatDatepickerModule,
} from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import {
  MatNativeDateModule,
  provideNativeDateAdapter,
} from '@angular/material/core';
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
  providers: [provideNativeDateAdapter()],
})
export class MuiDateTimePickerComponent {
  @Input() placeholder: string = 'Select a date'; // Placeholder text
  @Input() disabled: boolean = false; // Disable the picker
  @Input() appearance: 'outline' | 'fill' = 'fill';

  @Output() valueChange = new EventEmitter<Date | null>(); // EventEmitter for date changes
  value: Date | null = null; // Selected date value

  @ViewChild('picker') picker!: MatDatepicker<Date>; // Reference to the datepicker
  // Handle date changes and close picker
  onDateChange(event: any): void {
    this.value = event.value;
    this.valueChange.emit(this.value);
    this.removeOverlay();
  }

  removeOverlay(): void {
    const overlayContainer = document.querySelector('.cdk-overlay-container');
    if (overlayContainer) {
      overlayContainer.innerHTML = ''; // Remove all content within the overlay
    }
  }
}
