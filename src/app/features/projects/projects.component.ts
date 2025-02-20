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
        <h2 class="fade-in">💻 Mis Proyectos</h2>
        <p class="fade-in delay-1">Aquí algunos de mis trabajos recientes en desarrollo web.</p>

        <div class="projects-grid fade-in delay-2">
          <div class="project-card" *ngFor="let project of projects">
            <div class="project-image">
              <img [src]="project.image" [alt]="project.title">
            </div>
            <div class="project-content">
              <h3>{{ project.title }}</h3>
              <p>{{ project.description }}</p>
              <a [href]="project.link" target="_blank" class="btn-project">Ver Proyecto</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    /* === SECCIÓN PROYECTOS === */
    .projects {
      padding: 4rem 2rem;
      background: linear-gradient(135deg, #1b2735, #090a0f);
      color: white;
      text-align: center;
    }

    /* === GRID DE PROYECTOS === */
    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 20px;
      margin-top: 2rem;
    }

    /* === TARJETA DEL PROYECTO === */
    .project-card {
      background: rgba(255, 255, 255, 0.1);
      border-radius: 12px;
      overflow: hidden;
      text-align: center;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      display: flex;
      flex-direction: column;
    }
    .project-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 20px rgba(255, 255, 255, 0.2);
    }

    /* === IMAGEN DEL PROYECTO === */
    .project-image {
      width: 100%;
      height: 200px;
      overflow: hidden;
      border-radius: 12px 12px 0 0;
    }
    .project-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease-in-out;
    }
    .project-card:hover .project-image img {
      transform: scale(1.1);
    }

    /* === CONTENIDO DEL PROYECTO === */
    .project-content {
      padding: 20px;
    }
    .project-content h3 {
      font-size: 1.4rem;
      color: #f8d210;
      margin-bottom: 10px;
    }
    .project-content p {
      font-size: 1rem;
      color: rgba(255, 255, 255, 0.8);
      margin-bottom: 15px;
    }

    /* === BOTÓN DE PROYECTO === */
    .btn-project {
      display: inline-block;
      padding: 10px 20px;
      font-size: 1rem;
      font-weight: bold;
      color: white;
      background: #f8d210;
      border-radius: 5px;
      transition: all 0.3s ease;
      text-decoration: none;
    }
    .btn-project:hover {
      background: #e67e22;
      transform: scale(1.05);
    }

    /* === ANIMACIONES === */
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
      image: 'https://source.unsplash.com/500x300/?technology',
      link: 'https://github.com/orlando/ecommerce-angular'
    },
    {
      title: 'Dashboard Admin',
      description: 'Panel de administración con gráficos y reportes.',
      image: 'https://source.unsplash.com/500x300/?data',
      link: 'https://github.com/orlando/dashboard-admin'
    },
    {
      title: 'Blog con Angular y Firebase',
      description: 'Plataforma de blogging con autenticación.',
      image: 'https://source.unsplash.com/500x300/?programming',
      link: 'https://github.com/orlando/blog-angular-firebase'
    },
    {
      title: 'Gestor de Tareas',
      description: 'Aplicación web para gestionar tareas y proyectos.',
      image: 'https://source.unsplash.com/500x300/?tasks',
      link: 'https://github.com/orlando/task-manager'
    }
  ];
}
