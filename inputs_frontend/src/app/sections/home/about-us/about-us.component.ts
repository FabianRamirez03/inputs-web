import { Component } from '@angular/core';
import { RestApiService } from '../../../services/rest-api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule, FormControl } from '@angular/forms';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {
  contactForm = new FormGroup({
    name: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    phone: new FormControl('',Validators.required),
    contactPreference: new FormControl('',Validators.required),
    question: new FormControl('',Validators.required),
  });


  constructor(private fb: FormBuilder, private restApiService: RestApiService) {
    
  }

  ngOnInit() {
    this.contactForm.patchValue;
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.contactForm.value);
  }

  /*
  onSubmit(): void {
    console.log('Método onSubmit() llamado'); // Registra cuando el método es llamado
    console.log('Estado del formulario:', this.contactForm); // Registra el estado completo del formulario
  
    if (this.contactForm.valid) {
      console.log('Formulario válido. Datos del formulario:', this.contactForm.value); // Registra los datos del formulario si es válido
      
      this.restApiService.sendContactForm(this.contactForm.value)
        .subscribe(
          response => {
            // Manejo de la respuesta del servidor
            console.log('Respuesta del servidor:', response); // Registra la respuesta del servidor
            alert('Formulario enviado con éxito');
          },
          error => {
            // Manejo de errores
            console.error('Error al enviar el formulario', error); // Registra el error
            alert('Ocurrió un error al enviar el formulario');
          }
        );
    } else {
      // Manejo si el formulario es inválido
      console.log('Formulario inválido. Errores:', this.contactForm.errors); // Registra los errores del formulario
      alert('Por favor, complete todos los campos requeridos');
    }
  }*/

}
