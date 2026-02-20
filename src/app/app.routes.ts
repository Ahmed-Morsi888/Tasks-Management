import { Routes } from '@angular/router';
import { authGuardGuard } from './guards/auth-guard-guard';
import { Dashboard } from './features/dashboard/dashboard';
import { Tasks } from './features/tasks/tasks';
import { Emails } from './features/emails/emails';
import { Notifications } from './features/notifications/notifications';
import { Notes } from './features/notes/notes';
import { Calender } from './features/calender/calender';
import { Notfound } from './features/notfound/notfound';

export const routes: Routes = [
  { path: '', component: Dashboard },
  { path: 'tasks', loadComponent: () => import(`./features/tasks/tasks`).then((c) => c.Tasks) },
  { path: 'emails', loadComponent: () => import(`./features/emails/emails`).then((c) => c.Emails) },
  {
    path: 'notification',
    loadComponent: () =>
      import(`./features/notifications/notifications`).then((c) => c.Notifications),
  },
  { path: 'notes', loadComponent: () => import(`./features/notes/notes`).then((c) => c.Notes) },
  {
    path: 'calender',
    loadComponent: () => import(`./features/calender/calender`).then((c) => c.Calender),
  },

  {
    path: '**',
    loadComponent: () => import(`./features/notfound/notfound`).then((c) => c.Notfound),
  },
];
