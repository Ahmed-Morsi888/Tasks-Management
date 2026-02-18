import { Routes } from '@angular/router';
import { Admin } from './admin/admin';
import { User } from './user/user';
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
  { path: 'tasks', component: Tasks },
  { path: 'emails', component: Emails },
  { path: 'notification', component: Notifications },
  { path: 'notes', component: Notes },
  { path: 'calender', component: Calender },

  { path: '**', component: Notfound },
];
