import { Component, computed, input, signal } from '@angular/core';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { Heading } from '../heading/heading';

@Component({
  selector: 'app-assigned-tasks',
  imports: [ReactiveFormsModule, Heading],
  templateUrl: './assigned-tasks.html',
})
export class AssignedTasks {
  tasksStatus = new FormControl('All');
  data = input<
    {
      project: string;
      task: { number: string; name: string };
      status: string;
      Due: string;
      workers: number;
    }[]
  >();
  optionValue = signal<string | null>('All');
  statusOptions = [
    { label: 'All', value: 'All' },
    { label: 'In Progress', value: 'in progress' },
    { label: 'Completed', value: 'completed' },
    { label: 'Pending', value: 'pending' },
  ];
  ngOnInit() {
    this.tasksStatus.valueChanges.subscribe((value) => {
      this.optionValue.set(value);
      console.log(this.optionValue());
    });
  }

  filteredData = computed(() => {
    const data = this.data() ?? [];
    const value = this.optionValue();

    if (value === 'All') return data.slice(0, 3);

    return data.filter((item) => item.status === value).slice(0, 3);
  });
}
