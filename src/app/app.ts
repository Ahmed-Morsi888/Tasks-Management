import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './Core/navbar/navbar';
import { Sidebar } from './Core/sidebar/sidebar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Sidebar],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
