import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
@Component({
  selector: 'mui-select',
  standalone: true,
  imports: [MatSelectModule, CommonModule, MatIconModule],
  templateUrl: './mui-select.component.html',
  styleUrls: ['./mui-select.component.css'],
})
export class MuiSelectComponent {
  options: { value: any; label: string }[] = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];
  @Input() placeholder: string = 'Select an option';
  @Input() className: string = '';
  @Input() disabled: boolean = false;
  @Input() value: any;
  @Input() fullWidth: boolean = false;
  @Input() appearance: 'outline' | 'fill' = 'fill';
  @Input() leftIcon: string | null = null;

  @Output() valueChange = new EventEmitter<any>();

  onSelectionChange(event: any): void {
    this.value = event.value;
    this.valueChange.emit(this.value);
  }
}
