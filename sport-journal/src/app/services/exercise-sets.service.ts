import { Injectable, inject } from '@angular/core';
import {
 ExerciseSet,
 ExerciseSetList,
 ExerciseSetListAPI,
} from '../interfaces/exercise-set';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
 
@Injectable({
 providedIn: 'root',
})
export class ExerciseSetsService {
 private httpClient = inject(HttpClient);
 private url = 'http://localhost:3000/journal';
 
 getInitialList(): Observable<ExerciseSetList> {
   return this.httpClient.get<ExerciseSetListAPI>(this.url).pipe(map(e => e.items));
 }
 
 refreshList(): Observable<ExerciseSetList> {
   return this.httpClient.get<ExerciseSetListAPI>(this.url).pipe(map(e => e.items));
 }
 
 addNewItem(item: ExerciseSet): Observable<ExerciseSet> {
   return this.httpClient.post<ExerciseSet>(this.url, item);
 }
 
 deleteItem(id: string): Observable<boolean> {
   return this.httpClient.delete<boolean>(`${this.url}/${id}`);
 }
 
 updateItem(id: string, item: ExerciseSet): Observable<ExerciseSet> {
   return this.httpClient.put<ExerciseSet>(`${this.url}/${id}`, item);
 }
}