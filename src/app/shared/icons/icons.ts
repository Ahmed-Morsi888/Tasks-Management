import { Component, input } from '@angular/core';

@Component({
  selector: 'app-icons',
  imports: [],
  templateUrl: './icons.html',
  styleUrl: './icons.css',
})
export class Icons {
  name = input<string>('');

  iconsList = [
    { name: 'Dashboard', icon: 'pi pi-home' },
    { name: 'Tasks', icon: 'pi pi-book' },
    { name: 'Emails', icon: 'pi pi-envelope' },
    { name: 'Notification', icon: 'pi pi-bell' },
    { name: 'Notes', icon: 'pi pi-file-o' },
    { name: 'Calender', icon: 'pi pi-calendar' },
  ];

  get selectedIcon(): string {
    return this.iconsList.find((icon) => icon.name === this.name())?.icon || '';
  }
}
