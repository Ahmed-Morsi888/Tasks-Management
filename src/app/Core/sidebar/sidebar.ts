import { CommonModule, NgClass } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './data-access/routs';
import { SidebatItem } from './components/sidebat-item/sidebat-item';

@Component({
  selector: 'app-sidebar',
  imports: [RouterModule, CommonModule, SidebatItem],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  navResponse = signal<boolean>(false);
  routes = routes;

  toggleNav() {
    this.navResponse.update((value) => !value);
  }
}
