import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  template: `
    <button class="rounded bg-blue-300 py-2 px-4 font-bold text-white hover:bg-blue-700" (click)="selectOption('Option 1')">Option 1</button>
    <button class="rounded bg-blue-400 py-2 px-4 font-bold text-white hover:bg-blue-700" (click)="selectOption('Option 2')">Option 2</button>
    <button class="rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700" (click)="selectOption('Option 3')">Option 3</button>
  `,
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  @Output() onClick = new EventEmitter<string>();

  selectOption(option: string) {
    this.onClick.emit(option);
  }
}
