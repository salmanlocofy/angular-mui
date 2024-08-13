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
  // Input properties for button configuration
  @Input() type:
    | 'basic'
    | 'raised'
    | 'stroked'
    | 'flat'
    | 'icon'
    | 'fab'
    | 'extended' = 'basic';
  @Input() label: string = 'label';
  @Input() icon: string = ''; // For icon buttons
  @Input() color: 'primary' | 'accent' | 'warn' = 'primary'; // Button color
  @Input() disabled: boolean = false; // Disable the button
  @Input() href: string = ''; // URL for link buttons
  @Input() ariaLabel: string = ''; // ARIA label for accessibility
  @Input() extended: boolean = false; // Whether the button is extended (only for fab)
  @Input() multiple: boolean = false; // Allow multiple sections to be expanded
  @Input() iconPosition: 'before' | 'after' = 'before'; // Icon position
  @Input() className: string = '';
  // Output event emitter for button clicks
  @Output() click: EventEmitter<void> = new EventEmitter<void>();

  // Method to handle button clicks
  onClick(event: Event): void {
    event.preventDefault(); // Prevent default behavior if necessary (e.g., for links)
    this.click.emit();
  }
}
