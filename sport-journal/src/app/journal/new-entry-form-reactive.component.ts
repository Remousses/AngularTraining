import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ExerciseSetsService } from '../services/exercise-sets.service';
import { multipleValidator } from '../core/custom-validation';

@Component({
  selector: 'app-new-entry-form-reactive',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  template: `
    <div class="flex h-screen items-center justify-center bg-gray-200">
      <form
        [formGroup]="entryForm"
        (ngSubmit)="newEntry()"
        class="mx-auto max-w-sm rounded bg-gray-200 p-4">
        <div class="mb-4">
          <label for="date" class="mb-2 block font-bold text-gray-700"
            >Date:</label
          >
          <input
            type="date"
            id="date"
            name="date"
            class="w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow"
            formControlName="date" />
          <div
            *ngIf="
              entryForm.get('date')?.invalid && entryForm.get('date')?.touched
            "
            class="mt-1 text-red-500">
            Date is required.
          </div>
        </div>
        <div class="mb-4">
          <label for="exercise" class="mb-2 block font-bold text-gray-700"
            >Exercise:</label
          >
          <input
            type="text"
            id="exercise"
            name="exercise"
            class="w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow"
            formControlName="exercise" />
          <div
            *ngIf="
              entryForm.get('exercise')?.invalid &&
              entryForm.get('exercise')?.touched
            "
            class="mt-1 text-red-500">
            Exercise is required.
          </div>
        </div>
        <div class="mb-4">
          <label for="sets" class="mb-2 block font-bold text-gray-700"
            >Sets:</label
          >
          <input
            type="number"
            id="sets"
            name="sets"
            class="w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow"
            formControlName="sets" />
          <div
            *ngIf="
              entryForm.get('sets')?.invalid && entryForm.get('sets')?.touched
            "
            class="mt-1 text-red-500">
            Sets is required and must be a positive number.
          </div>
          <div
            *ngIf="
              entryForm.get('sets')?.errors?.['isNotMultiple'] &&
              entryForm.get('sets')?.touched
            "
            class="mt-1 text-red-500">
            sets is required and must be multiple of 2.
          </div>
        </div>
        <div class="mb-4">
          <label for="reps" class="mb-2 block font-bold text-gray-700"
            >Reps:</label
          >
          <input
            type="number"
            id="reps"
            name="reps"
            class="w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow"
            formControlName="reps" />
          <div
            *ngIf="
              entryForm.get('reps')?.invalid && entryForm.get('reps')?.touched
            "
            class="mt-1 text-red-500">
            Reps is required and must be a positive number.
          </div>
          <div
            *ngIf="
              entryForm.get('reps')?.errors?.['isNotMultiple'] &&
              entryForm.get('reps')?.touched
            "
            class="mt-1 text-red-500">
            Reps is required and must be multiple of 3.
          </div>
        </div>
        <div class="flex items-center justify-center">
          <button
            type="submit"
            [disabled]="entryForm.invalid"
            [class.opacity-50]="entryForm.invalid"
            class="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
            Add Entry
          </button>
        </div>
      </form>
    </div>
    {{ entryForm.value | json }}
  `,
  styleUrl: './new-entry-form-reactive.component.scss',
})
export class NewEntryFormReactiveComponent implements OnInit {
  private exerciseSetsService = inject(ExerciseSetsService);
  private router = inject(Router);

  public entryForm!: FormGroup;
  private formBuilder = inject(FormBuilder);

  ngOnInit() {
    this.entryForm = this.formBuilder.group({
      date: ['', Validators.required],
      exercise: ['', Validators.required],
      sets: ['', [Validators.required, Validators.min(0), multipleValidator(2)]],
      reps: ['', [Validators.required, Validators.min(0), multipleValidator(3)]],
    });
  }

  newEntry() {
    if (this.entryForm.valid) {
      const newEntry = { ...this.entryForm.value };
      this.exerciseSetsService
        .addNewItem(newEntry)
        .subscribe(entry => this.router.navigate(['/home']));
    }
  }
}
