import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EntryItemComponent } from "./entry-item.component";
import { ExerciseSet, ExerciseSetList } from '../interfaces/exercise-set';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-list-entries',
    standalone: true,
    styleUrl: './list-entries.component.scss',
    imports: [CommonModule, EntryItemComponent],
    template: `
      <section class="mb-8">
        <h2 class="mb-4 text-xl font-bold">List of entries</h2>
        <ul class="rounded border shadow">
        <li *ngFor="let item of exerciseList; index as i; trackBy: itemTrackBy">
          <app-entry-item
          [exercise-set]="item"
          (deleteEvent)="deleteEvent.emit($event)"
          (newRepEvent)="newRepEvent.emit($event)"
          />
        </li>
      </ul>
     </section>
  `
})
export class ListEntriesComponent {
  @Input() exerciseList!: ExerciseSetList;
  @Output() newRepEvent = new EventEmitter<ExerciseSet>();
  @Output() deleteEvent = new EventEmitter<string>();

  itemTrackBy(index: number, item: ExerciseSet) {
    return item.id;
  }
}
