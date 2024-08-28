import { Component, AfterViewInit  } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements AfterViewInit  {

  ngAfterViewInit(): void {
  }

  constructor(private router: Router) {}

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


}
