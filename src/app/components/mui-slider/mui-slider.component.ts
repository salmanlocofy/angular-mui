import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'mui-slider',
  standalone: true,
  templateUrl: './mui-slider.component.html',
  styleUrls: ['./mui-slider.component.css'],
  imports: [
    CommonModule,
    MatSliderModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
})
export class MuiSliderComponent {
  @Input() min: number = 0; // Minimum value of the slider
  @Input() max: number = 100; // Maximum value of the slider
  @Input() step: number = 1; // Step interval of the slider
  @Input() value: number = 40; // Current value of the slider
  @Input() thumbLabel: boolean = false; // Show thumb label
  @Input() disabled: boolean = false; // Disable the slider

  @Output() valueChange = new EventEmitter<number>(); // EventEmitter for value changes

  onValueChange(event: any) {
    this.valueChange.emit(event.value);
  }
}
