import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
@Component({
  selector: 'mui-select',
  standalone: true,
  imports: [MatSelectModule, CommonModule],
  templateUrl: './mui-select.component.html',
  styleUrls: ['./mui-select.component.css'],
})
export class MuiSelectComponent {
  // Input properties for select configuration
  options: { value: any; label: string }[] = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];
  @Input() placeholder: string = 'Select an option';
  @Input() className: string = '';
  @Input() disabled: boolean = false;
  @Input() value: any; // The currently selected value

  // Output event emitter to notify parent of select changes
  @Output() valueChange = new EventEmitter<any>();

  // Method to handle select value changes
  onSelectionChange(event: any): void {
    this.value = event.value;
    this.valueChange.emit(this.value);
  }
}
