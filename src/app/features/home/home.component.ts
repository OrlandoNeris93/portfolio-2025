import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="hero">
      <div class="container text-center">
        <h1 class="fade-in">¡Hola, soy <span class="highlight">Orlando Neris</span>!</h1>
        <p class="fade-in delay-1">
          Desarrollador Web <span class="highlight">Full-Stack</span> | DBA con experiencia en tecnologías modernas.
        </p>
        <div class="fade-in delay-2">
          <a routerLink="/projects" class="btn btn-primary btn-lg">Mis Proyectos</a>
          <a routerLink="/contact" class="btn btn-outline-light btn-lg">Contáctame</a>
        </div>
      </div>
    </section>

    <section class="about-me">
      <div class="container">
        <h2 class="slide-up">Sobre Mí</h2>
        <p class="fade-in">
          Soy <strong>Orlando Neris</strong>, un <strong>desarrollador web Full-Stack</strong> y <strong>DBA</strong> con más de 4 años de experiencia.
          Especializado en <strong>optimización de bases de datos</strong>, <strong>arquitecturas RESTful</strong> y <strong>microservicios</strong>.
        </p>
        <p class="fade-in delay-1">
          Trabajo con tecnologías como <strong>PHP, JavaScript, PostgreSQL, Docker</strong> y más.
          Me apasiona desarrollar <strong>soluciones eficientes y escalables</strong>.
        </p>
      </div>
    </section>

    <section class="tech-stack">
      <div class="container text-center">
        <h2 class="slide-up">Tecnologías con las que trabajo</h2>
        <div class="grid">
          <div class="tech-item"><img src="assets/php-icon.png" alt="PHP"><span>PHP</span></div>
          <div class="tech-item"><img src="assets/js-icon.png" alt="JavaScript"><span>JavaScript</span></div>
          <div class="tech-item"><img src="assets/python-icon.png" alt="Python"><span>Python</span></div>
          <div class="tech-item"><img src="assets/sql-icon.png" alt="SQL"><span>SQL</span></div>
          <div class="tech-item"><img src="assets/linux-icon.png" alt="Linux"><span>Linux</span></div>
          <div class="tech-item"><img src="assets/git-icon.png" alt="Git"><span>Git</span></div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    /* === HERO SECTION === */
    .hero {
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      //background: linear-gradient(135deg, #1b2735, #090a0f);
      color: white;
      text-align: center;
      position: relative;
    }
    .highlight {
      color: #f39c12;
    }
    .btn {
      margin: 10px;
      padding: 12px 24px;
      font-size: 1.1rem;
      border-radius: 25px;
      transition: all 0.3s ease;
    }
    .btn-primary {
      background: #f39c12;
      border: none;
    }
    .btn-primary:hover {
      background: #e67e22;
      transform: scale(1.05);
    }
    .btn-outline-light {
      border: 2px solid white;
      color: white;
    }
    .btn-outline-light:hover {
      background: white;
      color: black;
      transform: scale(1.05);
    }

    /* === SOBRE MÍ === */
    .about-me {
      padding: 4rem 2rem;
      background: #ecf0f1;
      color: #333;
      text-align: center;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
      border-radius: 8px;
    }

    /* === STACK TECNOLÓGICO === */
    .tech-stack {
      padding: 4rem 2rem;
      background: #2c3e50;
      color: white;
      text-align: center;
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
      gap: 20px;
      margin-top: 2rem;
      justify-content: center;
    }
    .tech-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      background: rgba(255, 255, 255, 0.1);
      padding: 20px;
      border-radius: 10px;
      transition: transform 0.3s ease, background 0.3s ease;
    }
    .tech-item:hover {
      transform: scale(1.1);
      background: rgba(255, 255, 255, 0.2);
    }
    .tech-item img {
      width: 60px;
      height: 60px;
      margin-bottom: 10px;
    }
    .tech-item span {
      font-size: 1.2rem;
      font-weight: bold;
    }

    /* === ANIMACIONES === */
    .fade-in {
      opacity: 0;
      animation: fadeIn 1s ease-in forwards;
    }
    .slide-up {
      opacity: 0;
      transform: translateY(30px);
      animation: slideUp 1s ease-in forwards;
    }
    .delay-1 { animation-delay: 0.5s; }
    .delay-2 { animation-delay: 1s; }
    
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes slideUp {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `]
})
export class HomeComponent {}
