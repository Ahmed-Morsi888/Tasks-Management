import { Component, input, signal } from '@angular/core';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-card',
  imports: [NgClass],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  data = input<{ head: string; number: number }[]>();
}
