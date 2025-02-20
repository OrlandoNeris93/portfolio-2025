import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';

declare const grecaptcha: any; // ✅ Declaramos grecaptcha para evitar errores de TypeScript

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <section class="contact">
      <div class="container">
        <h2 class="text-center fade-in">📬 Contáctame</h2>
        <p class="text-center fade-in delay-1">Si tienes alguna consulta o quieres colaborar, envíame un mensaje.</p>

        <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" novalidate class="fade-in delay-2">
          <div class="form-group">
            <label for="name">Nombre</label>
            <input type="text" id="name" class="form-control" formControlName="name" placeholder="Tu Nombre">
            <small *ngIf="formControl('name').invalid && formControl('name').touched" class="text-danger">
              ⚠ El nombre es obligatorio.
            </small>
          </div>

          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" class="form-control" formControlName="email" placeholder="tucorreo@ejemplo.com">
            <small *ngIf="formControl('email').invalid && formControl('email').touched" class="text-danger">
              ⚠ Ingresa un email válido.
            </small>
          </div>

          <div class="form-group">
            <label for="message">Mensaje</label>
            <textarea id="message" rows="4" class="form-control" formControlName="message" placeholder="Escribe tu mensaje..."></textarea>
            <small *ngIf="formControl('message').invalid && formControl('message').touched" class="text-danger">
              ⚠ El mensaje debe tener al menos 10 caracteres.
            </small>
          </div>

          <button type="submit" class="btn-submit" [disabled]="contactForm.invalid || cargando">
            <span *ngIf="cargando" class="spinner-border spinner-border-sm"></span>
            {{ cargando ? 'Enviando...' : 'Enviar Mensaje' }}
          </button>
        </form>

        <div *ngIf="mensajeEnviado" class="alert success fade-in">
          🎉 ¡Mensaje enviado con éxito! Me pondré en contacto pronto.
        </div>
        <div *ngIf="errorEnvio" class="alert error fade-in">
          ❌ Hubo un error al enviar el mensaje. Inténtalo más tarde.
        </div>
      </div>
    </section>
  `,
  styles: [`
    /* === CONTENEDOR === */
    .contact {
      padding: 4rem 0;
      background: linear-gradient(135deg, #1e3c72, #2a5298);
      color: white;
      text-align: center;
    }
    .container {
      max-width: 600px;
      background: rgba(255, 255, 255, 0.1);
      padding: 2rem;
      border-radius: 10px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
      backdrop-filter: blur(10px);
    }

    /* === FORMULARIO === */
    .form-group {
      margin-bottom: 1rem;
      text-align: left;
    }
    label {
      font-weight: bold;
      color: #f8d210;
    }
    .form-control {
      width: 100%;
      padding: 12px;
      border: 1px solid rgba(255, 255, 255, 0.3);
      border-radius: 5px;
      background: rgba(255, 255, 255, 0.2);
      color: white;
      transition: all 0.3s ease;
    }
    .form-control:focus {
      outline: none;
      border-color: #f8d210;
      background: rgba(255, 255, 255, 0.3);
    }

    /* === BOTÓN DE ENVÍO === */
    .btn-submit {
      width: 100%;
      padding: 12px;
      border: none;
      background: #f8d210;
      color: black;
      font-size: 1.1rem;
      font-weight: bold;
      border-radius: 5px;
      transition: all 0.3s ease;
    }
    .btn-submit:hover {
      background: #e67e22;
      transform: scale(1.05);
    }
    .btn-submit:disabled {
      background: #ccc;
      cursor: not-allowed;
    }

    /* === ALERTAS === */
    .alert {
      padding: 1rem;
      margin-top: 1rem;
      border-radius: 5px;
      font-weight: bold;
    }
    .success {
      background: rgba(46, 204, 113, 0.8);
      color: white;
    }
    .error {
      background: rgba(231, 76, 60, 0.8);
      color: white;
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
export class ContactComponent {
  contactForm: FormGroup;
  mensajeEnviado = false;
  errorEnvio = false;
  cargando = false;
  recaptchaToken: string = '';

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
      this.cargando = true;
      this.mensajeEnviado = false;
      this.errorEnvio = false;

      try {
        // Obtener el token de reCAPTCHA
        const token = await this.obtenerTokenReCaptcha();
        if (!token) throw new Error('Error en reCAPTCHA');

        const templateParams = {
          name: this.contactForm.value.name,
          email: this.contactForm.value.email,
          message: this.contactForm.value.message,
          recaptcha: token
        };

        await emailjs.send(
          'service_gysbpi7',
          'template_8tm86o8',
          templateParams,
          'ViPWPqjWewRxJpo8k'
        );

        this.mensajeEnviado = true;
        this.contactForm.reset();
      } catch (error) {
        console.error('Error al enviar:', error);
        this.errorEnvio = true;
      }

      this.cargando = false;
      setTimeout(() => {
        this.mensajeEnviado = false;
        this.errorEnvio = false;
      }, 5000);
    }
  }

  private async obtenerTokenReCaptcha(): Promise<string> {
    return new Promise((resolve, reject) => {
      if (typeof grecaptcha !== 'undefined') {
        grecaptcha.execute('TU_CLAVE_DEL_SITIO', { action: 'submit' }).then((token: string) => {
          resolve(token);
        }).catch(() => reject(''));
      } else {
        reject('');
      }
    });
  }
}
