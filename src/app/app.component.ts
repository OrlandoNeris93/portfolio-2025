import { Component } from '@angular/core';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { RouterOutlet } from '@angular/router';
import { NgxParticlesModule } from "@tsparticles/angular";    
import { BackgroundComponent } from './shared/background/background.component';  // Importar BackgroundComponent

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent, 
    RouterOutlet, 
    BackgroundComponent,  // Asegúrate de incluir el BackgroundComponent
    NgxParticlesModule
  ],
  template: `
    <app-navbar></app-navbar>
    <app-background></app-background>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {}
