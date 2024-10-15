import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'mui-radio',
  standalone: true,
  imports: [MatRadioModule],
  templateUrl: './mui-radio.component.html',
  styleUrls: ['./mui-radio.component.css'],
})
export class MuiRadioComponent {
  // Input properties for label, value, checked state, and disabled state
  @Input() label: string = 'label';
  @Input() showLabel: boolean = false;
  @Input() value: any;
  @Input() checked: boolean = false;
  @Input() disabled: boolean = false;
  @Input() name: string = '';
  @Input() className: string = '';

  // Output event emitter to notify parent of radio button state changes
  @Output() valueChange = new EventEmitter<any>();

  // Method to handle changes in radio button state
  onRadioChange(event: any): void {
    this.valueChange.emit(this.value);
  }
}
