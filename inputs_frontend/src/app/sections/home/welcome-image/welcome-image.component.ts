import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome-image',
  standalone: true,
  imports: [],
  templateUrl: './welcome-image.component.html',
  styleUrl: './welcome-image.component.scss'
})
export class WelcomeImageComponent {

  constructor(private router: Router) {}

  navigateToServices() {
    this.router.navigate(['/servicios']);
  }

}
