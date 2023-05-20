import { Component, Input } from '@angular/core';
import { Square } from '../types';

@Component({
  selector: 'app-square',
  template: ` <button mat-raised-button color="{{ getColor(value) }}">
    {{ value }}
  </button>`,
  styles: ['button { width: 100%; height: 100% !important; font-size: 5em ; }'],
})
export class SquareComponent {
  @Input() value: Square = null;
  getColor = (value: Square) => {
    switch (value) {
      case 'X':
        return 'primary';
      case 'O':
        return 'accent';
      default:
        return 'basic';
    }
  };
}
