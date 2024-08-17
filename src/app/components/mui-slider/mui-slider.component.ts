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
  @Input() min: number = 0;
  @Input() max: number = 100;
  @Input() step: number = 1;
  @Input() value: number = 40;
  @Input() thumbLabel: boolean = false;
  @Input() disabled: boolean = false;

  @Output() valueChange = new EventEmitter<number>();

  onValueChange(event: any) {
    this.valueChange.emit(event.value);
  }
}
