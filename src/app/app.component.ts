import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MuiInputComponent } from './components/mui-input/mui-input.component';
import { MuiTextareaComponent } from './components/mui-textarea/mui-textarea.component';
import { MuiCheckboxComponent } from './components/mui-checkbox/mui-checkbox.component';
import { MuiRadioComponent } from './components/mui-radio/mui-radio.component';
import { MuiExpansionPanelComponent } from './components/mui-expansion-panel/mui-expansion-panel.component';
import { MuiSwitchComponent } from './components/mui-switch/mui-switch.component';
import { MuiSelectComponent } from './components/mui-select/mui-select.component';
import { MuiAutocompleteComponent } from './components/mui-autocomplete/mui-autocomplete.component';
import { MuiProgressComponent } from './components/mui-progress/mui-progress.component';
import { MuiSliderComponent } from './components/mui-slider/mui-slider.component';
import { MuiDateTimePickerComponent } from './components/mui-date-time-picker/mui-date-time-picker.component';
import { MuiButtonComponent } from './components/mui-button/mui-button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MuiInputComponent,
    MuiTextareaComponent,
    MuiCheckboxComponent,
    MuiRadioComponent,
    MuiExpansionPanelComponent,
    MuiSwitchComponent,
    MuiSelectComponent,
    MuiAutocompleteComponent,
    MuiProgressComponent,
    MuiSliderComponent,
    MuiDateTimePickerComponent,
    MuiButtonComponent,
  ],
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-mui';

  selectedValue: any = null;
  isDisabled: boolean = false;

  onValueChange(value: any): void {
    this.selectedValue = value;
    console.log('Selected value:', value);
  }
}
