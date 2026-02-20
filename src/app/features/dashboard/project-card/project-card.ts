import { Component, input } from '@angular/core';
import { Heading } from '../heading/heading';

@Component({
  selector: 'app-project-card',
  imports: [Heading],
  template: `
    <main class=" mt-4 px-4 py-3.5 bg-gray-200 rounded-lg shadow-md">
      <section class="flex flex-col gap-2 ">
        <div>
          <app-heading [head]="'Projects'"></app-heading>
        </div>

        <hr class="border-gray-300 mt-2 " />

        <div class="flex flex-wrap gap-4 justify-center items-center ">
          <div
            class=" w-[48%] flex gap-2 bg-gray-100 rounded-lg px-2 py-4 items-center shadow-sm cursor-pointer  hover:bg-gray-300"
          >
            <div
              class=" flex justify-center items-center w-10 h-10 border-2 border-gray-400 rounded-full"
            >
              <i class="pi pi-plus text-xl "></i>
            </div>
            <span class=" text-xl  font-medium  ">Add Project</span>
          </div>

          @for (item of data(); track $index) {
            <div
              class=" w-[48%] flex  gap-2 bg-gray-100 rounded-lg px-2 py-3 items-center shadow-sm cursor-pointer  hover:bg-gray-300 "
            >
              <div
                class=" flex justify-center items-center w-10 h-10 border-2 border-gray-400 rounded-lg"
              >
                <span class=" text-gray-600 font-medium text-2xl">{{ item.project[0] }}</span>
              </div>
              <div class="flex flex-col gap-1">
                <span class=" text-xl font-medium   ">{{ item.project }}</span>
                <p class="text-gray-400 font-medium text-sm">{{ item.task.number }}</p>
              </div>
            </div>
          }
        </div>
      </section>
    </main>
  `,
})
export class ProjectCard {
  data = input<
    {
      project: string;
      task: { number: string; name: string };
      status: string;
      Due: string;
      workers: number;
    }[]
  >();
}
