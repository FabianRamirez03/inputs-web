import { Component } from '@angular/core';

@Component({
  selector: 'app-location',
  standalone: true,
  imports: [],
  templateUrl: './location.component.html',
  styleUrl: './location.component.scss'
})
export class LocationComponent {
  // Coordenadas de la clínica
  latitude = 10.001380653992486; // Ejemplo de latitud
  longitude = -84.11767287224917; // Ejemplo de longitud

  // URLs para Google Maps y Waze
  googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${this.latitude},${this.longitude}`;
  wazeUrl = `https://waze.com/ul?ll=${this.latitude},${this.longitude}&navigate=yes`;

  // URL de la imagen de la clínica
  clinicImage = 'general/location/clinicaExterior.jpg'; // Cambia la ruta según sea necesario

}
