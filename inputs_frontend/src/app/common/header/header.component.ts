import { Component, AfterViewInit, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from '../../services/rest-api.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgFor],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements AfterViewInit, OnInit  {
  constructor(private router: Router, private restApiService: RestApiService) {}
  
  services: any[] = [];
  ngOnInit(): void {
    this.loadServices();
  }

  ngAfterViewInit(): void {
  }

  

  navigateTo(path: string): void {
    this.router.navigate([path]).then(success => {
      if (success) {
        // Navegación exitosa
        console.log('Navegación exitosa');
      } else {
        // Error en la navegación
        console.log('Error en la navegación');
      }
    });
  }

  navigateToWithId(id: string): void {
    if (this.router.url !== '/inicio') {
      this.router.navigate(['/inicio']).then(() => {
        this.scrollToElement(id);
      });
    } else {
      this.scrollToElement(id);
    }
  }

  private scrollToElement(id: string): void {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
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
