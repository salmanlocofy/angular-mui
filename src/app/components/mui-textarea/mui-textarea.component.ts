import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mui-textarea',
  templateUrl: './mui-textarea.component.html',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, CommonModule],
  styleUrls: ['./mui-textarea.component.css'],
})
export class MuiTextareaComponent {
  @Input() label: string = 'label';
  @Input() appearance: 'outline' | 'fill' = 'fill';
  @Input() placeholder: string = 'placeholder';
  @Input() value: string | null = null;
  @Input() rows: number = 3;
  @Input() cols: number = 20;
  @Input() className: string = '';
  @Input() fullWidth: boolean = false;

  @Output() valueChange = new EventEmitter<string>();

  onTextareaChange(event: Event): void {
    const textareaElement = event.target as HTMLTextAreaElement;
    this.valueChange.emit(textareaElement.value);
  }
}
