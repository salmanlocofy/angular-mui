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
  @Input() label: string = '';
  @Input() value: any;
  @Input() checked: boolean = false;
  @Input() disabled: boolean = false;
  @Input() name: string = '';
  @Input() className: string = '';

  @Output() valueChange = new EventEmitter<any>();

  onRadioChange(event: any): void {
    this.valueChange.emit(this.value);
  }
}
