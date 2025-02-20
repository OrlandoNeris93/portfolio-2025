import { Component } from '@angular/core';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, RouterOutlet],
  template: `
    <app-navbar></app-navbar>
    <main class="container mt-4">
      <router-outlet></router-outlet>
    </main>
  `,
  styles: []
})
export class AppComponent {}
