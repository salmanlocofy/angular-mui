import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'mui-expansion-panel',
  standalone: true,
  imports: [MatExpansionModule, MatAccordion, MatIconModule, CommonModule],
  templateUrl: './mui-expansion-panel.component.html',
  styleUrls: ['./mui-expansion-panel.component.css'],
})
export class MuiExpansionPanelComponent {
  @Input() heading: string = '';
  @Input() secondaryHeading: string = '';
  @Input() content: string = '';
  @Input() expanded: boolean = false;
  @Input() disabled: boolean = false;
  @Input() className: string = '';

  @Output() sectionToggle = new EventEmitter<{
    expanded: boolean;
  }>();

  toggleSection(): void {
    this.expanded = !this.expanded;
    this.sectionToggle.emit({ expanded: this.expanded });
  }
}
