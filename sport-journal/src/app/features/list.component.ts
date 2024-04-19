import { Component, Input } from '@angular/core';
import { EntryItemComponent } from "../journal/entry-item.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-list',
    standalone: true,
    imports: [CommonModule, EntryItemComponent],
    styleUrl: './list.component.scss',
    template: `
    <ul>
      <li *ngFor="let item of items">
        {{item}}
      </li>
    </ul>
  `
})
export class ListComponent {
  @Input() items: string[] = [];

}
