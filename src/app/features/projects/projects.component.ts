import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="projects">
      <div class="container text-center">
        <h2 class="fade-in">Mis Proyectos</h2>
        <p class="fade-in delay-1">Aquí algunos de mis trabajos recientes en desarrollo web.</p>

        <div class="row mt-4">
          <div 
            class="col-md-4 mb-4 fade-in delay-2" 
            *ngFor="let project of projects">
            <div class="card project-card">
              <img [src]="project.image" class="card-img-top" [alt]="project.title">
              <div class="card-body">
                <h5 class="card-title">{{ project.title }}</h5>
                <p class="card-text">{{ project.description }}</p>
                <a [href]="project.link" target="_blank" class="btn btn-primary">Ver Proyecto</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .projects {
      padding: 4rem 0;
      background: #f8f9fa;
    }
    .project-card {
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    .project-card:hover {
      transform: scale(1.05);
      box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
    }
    .fade-in {
      opacity: 0;
      animation: fadeIn 1s ease-in forwards;
    }
    .delay-1 { animation-delay: 0.5s; }
    .delay-2 { animation-delay: 1s; }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `]
})
export class ProjectsComponent {
  projects = [
    {
      title: 'E-Commerce Angular',
      description: 'Tienda en línea con pagos integrados.',
      image: 'https://source.unsplash.com/400x300/?technology',
      link: 'https://github.com/orlando/ecommerce-angular'
    },
    {
      title: 'Dashboard Admin',
      description: 'Panel de administración con gráficos y reportes.',
      image: 'https://source.unsplash.com/400x300/?data',
      link: 'https://github.com/orlando/dashboard-admin'
    },
    {
      title: 'Blog con Angular y Firebase',
      description: 'Plataforma de blogging con autenticación.',
      image: 'https://source.unsplash.com/400x300/?programming',
      link: 'https://github.com/orlando/blog-angular-firebase'
    }
  ];
}
