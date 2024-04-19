import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-error-page',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="flex h-screen flex-col items-center justify-center">
   <h1 class="mb-4 text-6xl font-bold text-red-500">Oops!</h1>
   <h2 class="mb-2 text-3xl font-bold text-gray-800">Looks like you're lost!</h2>
   <p class="mb-6 text-gray-600">
    We couldn't find the page you're looking for.
   </p>
   <p class="text-gray-600">
    But don't worry! Go back to the Sport Journa and continue your progress!
   </p>
   <a
    routerLink="/home"
    class="mt-4 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600"
   >
    Go back to the Sport Journal
   </a>
  </div>
  `,
  styleUrl: './error-page.component.scss'
})
export class ErrorPageComponent {

}
