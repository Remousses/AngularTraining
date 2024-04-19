import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from "./core/nav-bar.component";

@Component({
    selector: 'app-root',
    standalone: true,
    styleUrls: ['./app.component.scss'],
    template: `
    <app-nav-bar></app-nav-bar>
    <router-outlet></router-outlet>
  `,
    imports: [
        RouterOutlet,
        NavBarComponent
    ]
})
export class AppComponent {
  title = 'sport-journal';
}
