import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'mui-textarea',
  templateUrl: './mui-textarea.component.html',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule],
  styleUrls: ['./mui-textarea.component.css'],
})
export class MuiTextareaComponent {
  // Input properties for label, placeholder, value, and full-width option
  @Input() label: string = 'label';
  @Input() appearance: 'outline' | 'fill' = 'fill';
  @Input() disabled: boolean = false;
  @Input() placeholder: string = 'placeholder';
  @Input() value: string | null = null;
  @Input() fullWidth: boolean = true;
  @Input() rows: number = 3;
  @Input() cols: number = 20;
  @Input() className: string = '';

  // Output event emitter to notify parent of value changes
  @Output() valueChange = new EventEmitter<string>();

  // Method to handle changes in textarea value
  onTextareaChange(event: Event): void {
    const textareaElement = event.target as HTMLTextAreaElement;
    this.valueChange.emit(textareaElement.value);
  }
}
