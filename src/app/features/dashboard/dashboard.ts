import { Component, signal } from '@angular/core';
import { Card } from './card/card';
import { projectTasksData, tasksData } from './data-access/tasks-data';
import { AssignedTasks } from './assigned-tasks/assigned-tasks';

@Component({
  selector: 'app-dashboard',
  imports: [Card, AssignedTasks],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  data = signal<{ head: string; number: number }[]>(tasksData);
  _projectTasksData =
    signal<{ project: string; task: string; status: string; Due: string; workers: number }[]>(
      projectTasksData,
    );
}
