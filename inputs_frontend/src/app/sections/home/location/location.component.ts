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
  latitude = 10.001380653992486;
  longitude = -84.11767287224917; 

  // URLs para Google Maps y Waze
  googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${this.latitude},${this.longitude}`;
  wazeUrl = `https://waze.com/ul?ll=${this.latitude},${this.longitude}&navigate=yes`;

  clinicImage = 'general/location/clinica.webp'; 

}
