import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'mui-progress',
  standalone: true,
  templateUrl: './mui-progress.component.html',
  styleUrls: ['./mui-progress.component.css'],
  imports: [CommonModule, MatProgressBarModule, MatProgressSpinnerModule],
})
export class MuiProgressComponent {
  // Input properties for controlling the progress display
  @Input() type: 'bar' | 'spinner' = 'bar'; // Type of progress indicator
  @Input() mode: 'determinate' | 'indeterminate' = 'indeterminate'; // Progress mode
  @Input() value: number = 50; // Value for determinate progress bar
  @Input() width: string = '200'; // Value for determinate progress bar
  @Input() className: string = '';
  @Input() color: 'primary' | 'accent' | 'warn' = 'primary'; // Color of the progress indicator
  @Input() diameter: number = 50; // Diameter of the progress spinner

  @Output() valueChange = new EventEmitter<number>(); // EventEmitter for value changes

  ngOnChanges() {
    if (this.mode === 'determinate') {
      this.valueChange.emit(this.value);
    }
  }
}
