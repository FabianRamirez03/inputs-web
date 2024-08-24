import { Component } from '@angular/core';
import { WelcomeImageComponent } from "../welcome-image/welcome-image.component";
import { AboutUsComponent } from "../about-us/about-us.component";
import { ServicesSliderComponent } from "../services-slider/services-slider.component";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [WelcomeImageComponent, AboutUsComponent, ServicesSliderComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}
