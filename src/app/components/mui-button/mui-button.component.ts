import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'mui-button',
  templateUrl: './mui-button.component.html',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, CommonModule],
  styleUrls: ['./mui-button.component.css'],
})
export class MuiButtonComponent {
  @Input() type:
    | 'basic'
    | 'raised'
    | 'stroked'
    | 'flat'
    | 'icon'
    | 'fab'
    | 'extended' = 'basic';
  @Input() label: string = 'label';
  @Input() iconName: string = '';
  @Input() iconPosition: 'none' | 'left' | 'right' = 'none';
  @Input() disabled: boolean = false;
  @Input() ariaLabel: string = '';
  @Input() className: string = '';
  @Input() fullWidth: boolean = false;

  @Output() click: EventEmitter<void> = new EventEmitter<void>();

  onClick(event: Event): void {
    event.preventDefault();
    this.click.emit();
  }
}
