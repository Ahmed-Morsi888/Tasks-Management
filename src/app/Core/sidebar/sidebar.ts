import { CommonModule, NgClass } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [RouterModule, CommonModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  routes = [
    { url: '', name: `Dashboard`, icon: 'pi pi-home ' },
    { url: 'tasks', name: `Tasks`, icon: 'pi pi-book' },
    { url: 'emails', name: `Emails`, icon: 'pi pi-envelope' },
    { url: 'notification', name: `Notification`, icon: 'pi pi-bell' },
    { url: 'notes', name: `Notes`, icon: `pi pi-file-o` },
    { url: 'calender', name: `Calender`, icon: 'pi pi-calendar' },
  ];

  navResponse = signal<boolean>(false);

  toggleNav() {
    this.navResponse.update((value) => !value);
  }
}
