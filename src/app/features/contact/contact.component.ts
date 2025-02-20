import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <section class="contact">
      <div class="container">
        <h2 class="text-center">Contacto</h2>
        <p class="text-center">Envíame un mensaje y me pondré en contacto contigo.</p>

        <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" novalidate>
          <!-- Nombre -->
          <div class="mb-3">
            <label for="name" class="form-label">Nombre</label>
            <input type="text" id="name" class="form-control" formControlName="name">
            <small *ngIf="formControl('name').invalid && formControl('name').touched" class="text-danger">
              El nombre es obligatorio.
            </small>
          </div>

          <!-- Email -->
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" id="email" class="form-control" formControlName="email">
            <small *ngIf="formControl('email').invalid && formControl('email').touched" class="text-danger">
              Ingresa un email válido.
            </small>
          </div>

          <!-- Mensaje -->
          <div class="mb-3">
            <label for="message" class="form-label">Mensaje</label>
            <textarea id="message" rows="4" class="form-control" formControlName="message"></textarea>
            <small *ngIf="formControl('message').invalid && formControl('message').touched" class="text-danger">
              El mensaje debe tener al menos 10 caracteres.
            </small>
          </div>

          <!-- Botón de Enviar con Spinner -->
          <button type="submit" class="btn btn-primary w-100" [disabled]="contactForm.invalid || cargando">
            <span *ngIf="cargando" class="spinner-border spinner-border-sm"></span>
            {{ cargando ? 'Enviando...' : 'Enviar Mensaje' }}
          </button>
        </form>

        <!-- Mensajes de éxito o error -->
        <div *ngIf="mensajeEnviado" class="alert alert-success mt-3">
          ¡Mensaje enviado con éxito! Me pondré en contacto pronto.
        </div>
        <div *ngIf="errorEnvio" class="alert alert-danger mt-3">
          Error al enviar el mensaje. Inténtalo más tarde.
        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact {
      padding: 4rem 0;
      background: #f8f9fa;
    }
    .container {
      max-width: 600px;
    }
  `]
})
export class ContactComponent {
  contactForm: FormGroup;
  mensajeEnviado = false;
  errorEnvio = false;
  cargando = false; // ✅ Nueva variable para el spinner

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  formControl(controlName: string) {
    return this.contactForm.controls[controlName];
  }

  async onSubmit() {
    if (this.contactForm.valid) {
      this.cargando = true; // Muestra el spinner
      this.mensajeEnviado = false;
      this.errorEnvio = false;

      const { name, email, message } = this.contactForm.value;
      
      try {
        await emailjs.send(
          'service_gysbpi7', // 🔹 Reemplaza con tu Service ID
          'template_8tm86o8', // 🔹 Reemplaza con tu Template ID
          { name, email, message },
          'ViPWPqjWewRxJpo8k' // 🔹 Reemplaza con tu Public Key
        );
        
        this.mensajeEnviado = true;
        this.contactForm.reset();
      } catch (error) {
        console.error('Error al enviar:', error);
        this.errorEnvio = true;
      }

      this.cargando = false; // Oculta el spinner
      setTimeout(() => { 
        this.mensajeEnviado = false;
        this.errorEnvio = false;
      }, 5000);
    }
  }
}
