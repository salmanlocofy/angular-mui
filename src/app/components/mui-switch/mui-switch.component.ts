import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'mui-switch',
  standalone: true,
  imports: [MatSlideToggleModule],
  templateUrl: './mui-switch.component.html',
  styleUrls: ['./mui-switch.component.css'],
})
export class MuiSwitchComponent {
  @Input() label: string = '';
  @Input() className: string = '';
  @Input() checked: boolean = false;
  @Input() disabled: boolean = false;
  @Input() color: 'primary' | 'accent' | 'warn' = 'primary';

  @Output() change = new EventEmitter<boolean>();

  onChange(event: any): void {
    this.checked = event.checked;
    this.change.emit(this.checked);
  }
}
