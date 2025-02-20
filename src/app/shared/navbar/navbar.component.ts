import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
      <div class="container">
        <a class="navbar-brand" routerLink="/">Orlando Neris - Desarrollador Web Full-Stack | DBA | PHP | JS | Python </a>
        <button class="navbar-toggler" type="button" (click)="toggleMenu()">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" [class.show]="menuAbierto" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item" *ngFor="let link of links">
              <a 
                class="nav-link" 
                [routerLink]="link.path" 
                [class.active]="rutaActiva === link.path"
                (click)="cerrarMenu()">
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `,
  styles: [`
    .navbar {
      padding: 1rem;
    }
    .nav-link.active {
      font-weight: bold;
      color: #f8d210 !important;
    }
    .collapse.show {
      display: block;
    }
  `]
})
export class NavbarComponent {
  menuAbierto = false;
  rutaActiva = '';

  links = [
    { label: 'Inicio', path: '/' },
    { label: 'Sobre mí', path: '/about' },
    { label: 'Proyectos', path: '/projects' },
    { label: 'Contacto', path: '/contact' }
  ];

  constructor(private router: Router) {
    // Detectar cambios en la ruta activa
    this.router.events.subscribe(() => {
      this.rutaActiva = this.router.url;
    });
  }

  toggleMenu() {
    this.menuAbierto = !this.menuAbierto;
  }

  cerrarMenu() {
    this.menuAbierto = false;
  }
}
