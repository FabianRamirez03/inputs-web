import { NgFor } from '@angular/common';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { RestApiService } from '../../../services/rest-api.service';

@Component({
  selector: 'app-services-slider',
  standalone: true,
  imports: [NgFor],
  templateUrl: './services-slider.component.html',
  styleUrl: './services-slider.component.scss'
})
export class ServicesSliderComponent {

  constructor(private restApiService: RestApiService) { }

  services: any[] = [];

  ngOnInit(): void {
    this.loadServices();
  }

  loadServices(): void {
    this.restApiService.getServicesNoBody().subscribe(
      (data) => {
        this.services = data.map(service => ({
          title: service.name,
          description: service.summary,
          image: service.image,
          link: `/servicios/${service.name.replace(/\s+/g, '-').toLowerCase()}`
        }));
      },
      (error) => {
        console.error('Error loading services:', error);
      }
    );
  }  

}