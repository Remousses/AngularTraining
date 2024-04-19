import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { EntryItemComponent } from './entry-item.component';
import { ListEntriesComponent } from './list-entries.component';
import { ExerciseSet, ExerciseSetList } from '../interfaces/exercise-set';
import { NewItemButtonComponent } from './new-item-button.component';
import { ExerciseSetsService } from '../services/exercise-sets.service';
import { AuthService } from '../services/auth.service';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-journal',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    TranslateModule,
    EntryItemComponent,
    ListEntriesComponent,
    NewItemButtonComponent,
  ],
  styleUrls: ['./journal.component.scss'],
  template: `
    <div class="min-h-screen bg-gray-200">
      <header class="bg-blue-500 py-4 text-white">
        <div class="mx-auto max-w-6xl px-4">
          <h1 class="text-2xl font-bold">{{ 'SPORT_TITLE' | translate }}</h1>
        </div>
      </header>
      <main class="mx-auto mt-8 max-w-6xl px-4">
        <app-list-entries
          [exerciseList]="exerciseList"
          (deleteEvent)="deleteItem($event)"
          (newRepEvent)="newRep($event)" />
        <app-new-item-button (newExerciseEvent)="addExercise($event)" />
        <br />
        <br />
        <button
          class="rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
          (click)="newList()">
          Server Sync
        </button>
        <br />
        <br />
        <button
          class="rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
          (click)="logout()">
          Logout
        </button>
        <button
          class="rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
          (click)="changeLanguage('en')">
          English
        </button>
        <button
          class="rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
          (click)="changeLanguage('fr')">
          Français
        </button>
      </main>
    </div>
  `,
})
export class JournalComponent {
  private exerciseSetsService = inject(ExerciseSetsService);
  private router = inject(Router);
  private authService = inject(AuthService);
  private route = inject(ActivatedRoute);
  private translateService = inject(TranslateService);

  title = 'sport-journal';
  exerciseList!: ExerciseSetList;

  ngOnInit(): void {
    this.route.data.subscribe(({ exerciceList }) => {
      this.exerciseList = exerciceList;
    });
  }

  newList() {
    this.exerciseSetsService
      .refreshList()
      .subscribe(dataApi => (this.exerciseList = dataApi));
  }

  addExercise(newSet: ExerciseSet) {
    this.router.navigate(['new-reactive']);
  }

  deleteItem(id: string) {
    this.exerciseSetsService.deleteItem(id).subscribe(() => {
      this.exerciseList = this.exerciseList.filter(
        exerciseSet => exerciseSet.id !== id,
      );
    });
  }

  newRep(updateSet: ExerciseSet) {
    const id = updateSet.id ?? '';
    this.exerciseSetsService.updateItem(id, updateSet).subscribe();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['']);
  }
  
  changeLanguage(language: string) {
    this.translateService.use(language);
  }
}
