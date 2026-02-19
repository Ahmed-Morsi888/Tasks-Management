import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { Icons } from '../../../../shared/icons/icons';

@Component({
  selector: 'app-sidebat-item',
  imports: [RouterLink, NgClass, RouterModule, Icons],
  template: ` <div class="px-4 mt-2">
    @if (!navResponse()) {
      <a
        class="flex items-center gap-2 px-2 py-2 rounded-lg w-full font-medium text-md hover:bg-blue-200  "
        [routerLinkActiveOptions]="{ exact: true }"
        routerLinkActive="bg-blue-600 text-white font-bold  hover:bg-blue-600"
        [routerLink]="route().url"
        ><app-icons [name]="route().name"> </app-icons> <span>{{ route().name }}</span>
      </a>
    } @else {
      <a
        class="flex items-center justify-center gap-2  p-3 rounded-xl w-full"
        [routerLinkActiveOptions]="{ exact: true }"
        routerLinkActive="bg-blue-600 text-white"
        [routerLink]="route().url"
        ><i class="text-lg" [ngClass]="route().icon"></i
      ></a>
    }
  </div>`,
})
export class SidebatItem {
  navResponse = input<boolean>(false);
  route = input<{ url: string; name: string; icon: string }>({ url: '', name: '', icon: '' });
}
