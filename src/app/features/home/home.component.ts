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
          Desarrollador Web <span class="highlight">Full-Stack</span> | DBA con más de 4 años de experiencia en tecnologías modernas.
        </p>
        <div class="fade-in delay-2">
          <a routerLink="/projects" class="btn btn-primary btn-lg me-2">Ver Proyectos</a>
          <a routerLink="/contact" class="btn btn-outline-light btn-lg">Contáctame</a>
        </div>
      </div>
    </section>

    <section class="about-me container text-center">
      <h2>Sobre mí</h2>
      <p>
        ¡Hola! Soy <strong>Orlando Neris</strong>, un desarrollador web Full-Stack y DBA con más de 4 años de experiencia creando soluciones web de alto rendimiento y escalabilidad. A lo largo de mi carrera, me he especializado en el diseño, desarrollo e implementación de aplicaciones web modernas y complejas, con un enfoque en la <strong>optimización de bases de datos</strong>, arquitecturas <strong>RESTful</strong>, <strong>microservicios</strong> y metodologías ágiles.
      </p>
      <p>
        Mi experiencia incluye el desarrollo de soluciones tanto en el <strong>frontend</strong> como en el <strong>backend</strong>, lo que me permite tener una visión integral de todo el proceso de desarrollo de software. Estoy acostumbrado a trabajar con tecnologías como <strong>PHP</strong> (versiones 5.x, 7.x, 8.x), <strong>JavaScript</strong>, <strong>PostgreSQL</strong>, <strong>PL/SQL</strong>, <strong>PostGIS</strong>, y <strong>Docker</strong>, y tengo un dominio sólido en la <strong>optimización de consultas SQL</strong>, diseño de bases de datos <strong>relacionales</strong> y <strong>espaciales</strong>, además de gestionar eficientemente <strong>servidores GNU/Linux</strong>.
      </p>
      <p class="skills">
        <strong>Tecnologías que manejo:</strong><br />
        <span>PHP, JavaScript, Python, PL/SQL, Ajax, JQuery, Bootstrap</span><br />
        <span>PostgreSQL, MySQL, SQL Server, PostGIS</span><br />
        <span>Docker, Git, Jira, Gitea, Postman</span><br />
        <span>Microservicios, RESTful APIs, CRON, Linux, Bash</span>
      </p>
      <p>
        Mi enfoque es siempre entregar soluciones robustas y escalables, adaptadas a las necesidades del cliente. Me apasiona la creación de <strong>aplicaciones web intuitivas</strong> y <strong>bien estructuradas</strong>, con un diseño limpio y eficiente, y que ofrezcan la mejor experiencia de usuario posible.
      </p>
      <p>
        Además, tengo experiencia trabajando en entornos colaborativos utilizando herramientas de control de versiones como <strong>Git</strong> y plataformas como <strong>Jira</strong> para gestionar proyectos. Mi trabajo está centrado en seguir los mejores estándares de <strong>programación</strong>, principios <strong>SOLID</strong> y patrones de diseño que me permitan crear aplicaciones mantenibles y eficientes.
      </p>
      <p>
        Si estás buscando un desarrollador web versátil, con una sólida base en backend y una visión clara de las necesidades de <strong>escalabilidad</strong> y <strong>rendimiento</strong>, estaré encantado de poder colaborar en tu proyecto.
      </p>
    </section>

    <section class="tech-stack">
      <div class="container text-center">
        <h2>Tecnologías con las que trabajo</h2>
        <div class="tech-icons">
          <img src="assets/php-icon.png" alt="PHP" />
          <img src="assets/js-icon.png" alt="JavaScript" />
          <img src="assets/python-icon.png" alt="Python" />
          <img src="assets/sql-icon.png" alt="SQL" />
          <img src="assets/linux-icon.png" alt="Linux" />
          <img src="assets/git-icon.png" alt="Git" />
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      height: 90vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, #2e4c91, #3c71c2);
      color: white;
      text-align: center;
      position: relative;
    }
    .highlight {
      color: #f8d210;
    }
    .btn {
      transition: transform 0.3s ease, background-color 0.3s ease;
    }
    .btn:hover {
      transform: scale(1.1);
      background-color: #f8d210;
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

    .about-me {
      padding: 4rem 0;
      background-color: #f9f9f9;
      color: #333;
      border-radius: 8px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }

    .skills {
      font-size: 1.2rem;
      color: #555;
      margin-top: 1rem;
    }

    .tech-stack {
      background: #1e3c72;
      color: white;
      padding: 4rem 0;
    }

    .tech-icons img {
      width: 50px;
      height: 50px;
      margin: 0 15px;
      opacity: 0.8;
      transition: transform 0.3s ease;
    }

    .tech-icons img:hover {
      transform: scale(1.2);
      opacity: 1;
    }
  `]
})
export class HomeComponent {}
