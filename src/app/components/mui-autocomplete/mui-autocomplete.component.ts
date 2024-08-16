import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'mui-autocomplete',
  standalone: true,
  templateUrl: './mui-autocomplete.component.html',
  styleUrls: ['./mui-autocomplete.component.css'],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatIconModule
  ],
})
export class MuiAutocompleteComponent {
  // Input properties
  options: { value: any; label: string }[] = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];
  @Input() appearance: 'outline' | 'fill' = 'fill';
  @Input() placeholder: string = 'Select an option';
  @Input() disabled: boolean = false;
  @Input() leftIcon: string | null = null; // Left icon name
  @Input() rightIcon: string | null = null; // Right icon
  @Input() value: any; // The currently selected value
  @Input() displayFn: (option: any) => string = (option) => option?.label || ''; // Function to display the option in the input
  @Input() filterFn: (
    options: { value: any; label: string }[],
    filterValue: string
  ) => { value: any; label: string }[] = (options, filterValue) =>
    options.filter((option) =>
      option.label.toLowerCase().includes(filterValue?.toLowerCase())
    );

  // Output event emitter for value changes
  @Output() valueChange = new EventEmitter<any>();

  filteredOptions$: Observable<{ value: any; label: string }[]> | undefined;

  @ViewChild('input') input!: ElementRef<HTMLInputElement>;
  control = new FormControl();
  ngOnInit() {
    this.filteredOptions$ = this.control.valueChanges.pipe(
      startWith(''),
      map((value) => this.filterFn(this.options, value))
    );
  }

  onOptionSelected(event: any): void {
    this.value = event.option.value;
    this.valueChange.emit(this.value);
    this.input.nativeElement.value = this.displayFn(this.value);
  }
}
