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
  // Input properties for the expansion panel sections
  @Input() sections: {
    heading: string;
    secondaryHeading: string;
    content: string;
    expanded: boolean;
    disabled: boolean;
  }[] = [
    {
      heading: 'Section 1',
      secondaryHeading: 'secondary Heading 1',
      content: 'Content for section 1',
      expanded: false,
      disabled: false,
    },
    // {
    //   heading: 'Section 2',
    //   secondaryHeading: 'secondary Heading 2',
    //   content: 'Content for section 2',
    //   expanded: false,
    //   disabled: false,
    // },
    // {
    //   heading: 'Section 3',
    //   secondaryHeading: 'secondary Heading 3',
    //   content: 'Content for section 3',
    //   expanded: false,
    //   disabled: true,
    // },
  ];
  @Input() multiple: boolean = false; // Allow multiple sections to be expanded
  @Input() className: string = '';
  // Output event emitter to notify parent of section toggle events
  @Output() sectionToggle = new EventEmitter<{
    index: number;
    expanded: boolean;
  }>();

  // Method to handle section expansion and collapse
  toggleSection(index: number): void {
    const section = this.sections[index];
    if (!this.multiple) {
      // Collapse all other sections if only one section can be expanded
      this.sections.forEach((sec, i) => {
        if (i !== index) {
          sec.expanded = false;
        }
      });
    }
    section.expanded = !section.expanded;
    this.sectionToggle.emit({ index, expanded: section.expanded });
  }
}
