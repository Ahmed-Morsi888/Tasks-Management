import { Component, input } from '@angular/core';

@Component({
  selector: 'app-heading',
  imports: [],
  template: `
    <header class="rubik text-gray-800 rounded-lg ">
      <h2 class="text-2xl font-bold">{{ head() }}</h2>
    </header>
  `,
})
export class Heading {
  head = input<string>('');
}
