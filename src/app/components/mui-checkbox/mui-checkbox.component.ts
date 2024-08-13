import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewEncapsulation,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'mui-checkbox',
  templateUrl: './mui-checkbox.component.html',
  standalone: true,
  imports: [MatCheckboxModule, FormsModule],
  styleUrls: ['./mui-checkbox.component.css'],
})
export class MuiCheckboxComponent {
  // Input properties for label, checked state, and disabled state
  @Input() label: string = '';
  @Input() checked: boolean = false;
  @Input() disabled: boolean = false;
  @Input() labelPosition: 'before' | 'after' = 'after';
  @Input() className: string = '';

  // Output event emitter to notify parent of checkbox state changes
  @Output() checkedChange = new EventEmitter<boolean>();

  // Method to handle changes in checkbox state
  onCheckboxChange(event: any): void {
    this.checkedChange.emit(event.checked);
  }
}
