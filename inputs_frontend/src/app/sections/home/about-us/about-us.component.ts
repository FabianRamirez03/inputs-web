import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../../../services/rest-api.service';

import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent implements OnInit {
  contactForm!: FormGroup;
  
  constructor(private fb: FormBuilder, private restApiService: RestApiService) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8)], Validators.pattern('^[0-9]+$')],
      contactPreference: ['', Validators.required],
      question: ['', Validators.required]
    });
  }

  
  onSubmit(): void {
    console.log('Método onSubmit() llamado');
    console.log('Estado del formulario:', this.contactForm);
  
    const validationError = this.validateForm();
  
    if (!validationError) {
      console.log('Formulario válido. Datos del formulario:', this.contactForm.value);
  
      this.restApiService.sendContactForm(this.contactForm.value)
        .subscribe(
          response => {
            console.log('Respuesta del servidor:', response);
            alert('Formulario enviado con éxito');
          },
          error => {
            console.error('Error al enviar el formulario', error);
            alert('Ocurrió un error al enviar el formulario');
          }
        );
    } else {
      console.log('Formulario inválido. Errores:', validationError);
      alert(`Por favor, corrija los siguientes errores:\n${validationError}`);
    }
  }

  validateForm(): string | null {
    // Diccionario de nombres de campo a etiquetas amigables
    const fieldLabels: { [key: string]: string } = {
      name: 'Nombre',
      email: 'Correo Electrónico',
      phone: 'Número de Telefono',
      contactPreference: 'Preferencia de Contacto',
      question: 'Tu pregunta',
    };
  
    if (this.contactForm.valid) {
      return null;
    }
  
    const errors = [];
    const controls = this.contactForm.controls;
  
    for (const name in controls) {
      if (controls[name].invalid) {
        const controlErrors = controls[name].errors;
        const label = fieldLabels[name] || name; // Usa el nombre amigable o el nombre original si no existe en el diccionario
    
        if (controlErrors?.['required']) {
          errors.push(`El campo ${label} es requerido.`);
        }
        if (controlErrors?.['minlength']) {
          const requiredLength = controlErrors['minlength'].requiredLength;
          const actualLength = controlErrors['minlength'].actualLength;
          errors.push(`El campo ${label} debe tener al menos ${requiredLength} caracteres. Actualmente tiene ${actualLength}.`);
        }
        if (controlErrors?.['maxlength']) {
          const requiredLength = controlErrors['maxlength'].requiredLength;
          const actualLength = controlErrors['maxlength'].actualLength;
          errors.push(`El campo ${label} no puede exceder de ${requiredLength} caracteres. Actualmente tiene ${actualLength}.`);
        }
        if (controlErrors?.['email']) {
          errors.push(`El campo ${label} debe ser una dirección de correo electrónico válida.`);
        }
        if (controlErrors?.['pattern']) {
          errors.push(`El campo ${label} debe ser un valor numérico de 8 dígitos.`);
        }
      }
    }
  
    return errors.length > 0 ? errors.join('\n') : null;
  }

}
