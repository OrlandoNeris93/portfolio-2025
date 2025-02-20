import { Component, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="about">
      <!-- Presentación Personal -->
      <div class="container about-block fade-in slide-in-left">
        <div class="row">
          <div class="col-md-7">
            <h2 class="color-change">Sobre Mí</h2>
            <p class="lead glow">
              Soy <strong>Orlando Neris</strong>, <strong>Desarrollador Back-End y DBA</strong> con más de 4 años de experiencia en 
              <strong>arquitecturas cliente-servidor</strong>, <strong>bases de datos</strong> y <strong>microservicios</strong>.
            </p>
          </div>
          <div class="col-md-5 text-center">
            <img src="assets/about/profile.jpg" alt="Orlando Neris - Desarrollador" class="img-fluid about-img parallax zoom-in blur flip">
          </div>
        </div>
      </div>

      <!-- Experiencia Profesional -->
      <div class="container about-block reverse fade-in slide-in-right">
        <div class="row">
          <div class="col-md-5 text-center">
            <img src="assets/about/experience.jpg" alt="Experiencia de Orlando Neris" class="img-fluid about-img parallax zoom-in blur flip">
          </div>
          <div class="col-md-7">
            <h2 class="color-change">Experiencia Profesional</h2>
            <p class="lead glow">
              Actualmente trabajo en <strong>ATIC Tecnologías</strong> como <strong>Desarrollador Back-End y DBA</strong>, donde 
              desarrollo APIs REST en PHP, administro bases de datos PostgreSQL y optimizo sistemas cliente-servidor.
            </p>
          </div>
        </div>
      </div>

      <!-- Formación Académica -->
      <div class="container about-block fade-in slide-in-left">
        <div class="row">
          <div class="col-md-7">
            <h2 class="color-change">Formación Académica</h2>
            <p class="lead glow">
              Soy <strong>Analista de Sistemas de Computación</strong> con formación en administración de servidores, bases de datos 
              y desarrollo de software.
            </p>
          </div>
          <div class="col-md-5 text-center">
            <img src="assets/about/education.jpg" alt="Formación de Orlando Neris" class="img-fluid about-img parallax zoom-in blur flip">
          </div>
        </div>
      </div>

      <!-- Habilidades y Tecnologías -->
      <div class="container about-block reverse fade-in slide-in-right">
        <div class="row">
          <div class="col-md-5 text-center">
            <img src="assets/about/skills.jpg" alt="Habilidades de Orlando Neris" class="img-fluid about-img parallax zoom-in blur flip">
          </div>
          <div class="col-md-7">
            <h2 class="color-change">Habilidades y Tecnologías</h2>
            <p class="lead glow">
              Manejo tecnologías como <strong>PHP, Bash, PostgreSQL, Docker, Linux</strong> y <strong>microservicios</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .about {
      padding: 60px 0;
    }
    .about-block {
      padding: 80px 0;
      opacity: 0;
      transform: translateY(50px);
      transition: opacity 1s ease-out, transform 1s ease-out;
    }
    .about-block.show {
      opacity: 1;
      transform: translateY(0);
    }
    .reverse .row {
      flex-direction: row-reverse;
    }
    .about-img {
      max-width: 80%;
      border-radius: 10px;
    }
    .parallax {
      transition: transform 0.3s ease-out;
    }
    .zoom-in {
      transform: scale(0.9);
      transition: transform 0.6s ease-out;
    }
    .zoom-in.show {
      transform: scale(1);
    }
    .slide-in-left {
      transform: translateX(-50px);
      transition: transform 1s ease-out;
    }
    .slide-in-right {
      transform: translateX(50px);
      transition: transform 1s ease-out;
    }
    .show.slide-in-left {
      transform: translateX(0);
    }
    .show.slide-in-right {
      transform: translateX(0);
    }
    .blur {
      filter: blur(10px);
      transition: filter 1s ease-out;
    }
    .blur.show {
      filter: blur(0);
    }
    .flip {
      transform: rotateY(180deg);
      transition: transform 1s ease-out;
    }
    .flip.show {
      transform: rotateY(0);
    }
    .color-change {
      transition: color 1s ease-in-out;
    }
    .color-change.show {
      color: #ff5733;
    }
    .glow {
      opacity: 0;
      text-shadow: 0px 0px 10px rgba(255, 255, 255, 0);
      transition: opacity 1s ease-out, text-shadow 1s ease-out;
    }
    .glow.show {
      opacity: 1;
      text-shadow: 0px 0px 15px rgba(255, 255, 255, 0.8);
    }
  `]
})
export class AboutComponent implements AfterViewInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    const blocks = this.el.nativeElement.querySelectorAll('.about-block') as NodeListOf<Element>;
    const images = this.el.nativeElement.querySelectorAll('.parallax') as NodeListOf<HTMLElement>;
    const texts = this.el.nativeElement.querySelectorAll('.glow, .color-change, .blur, .flip') as NodeListOf<Element>;

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.renderer.addClass(entry.target, 'show');
        }
      });
    }, { threshold: 0.3 });

    blocks.forEach((block: Element) => observer.observe(block));
    images.forEach((img: HTMLElement) => observer.observe(img));
    texts.forEach((text: Element) => observer.observe(text));

    window.addEventListener('scroll', () => {
      let scrollY = window.scrollY;
      images.forEach((img: HTMLElement) => {
        let speed = 0.3;
        img.style.transform = `translateY(${scrollY * speed}px)`;
      });
    });
  }
}
