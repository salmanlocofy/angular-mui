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
  @Input() type: 'bar' | 'spinner' = 'bar';
  @Input() mode: 'determinate' | 'indeterminate' = 'indeterminate';
  @Input() value: number = 50;
  @Input() width: string = '200';
  @Input() className: string = '';
  @Input() color: 'primary' | 'accent' | 'warn' = 'primary';
  @Input() diameter: number = 50;

  @Output() valueChange = new EventEmitter<number>();

  ngOnChanges() {
    if (this.mode === 'determinate') {
      this.valueChange.emit(this.value);
    }
  }
}
