import { Component } from '@angular/core';
import { WelcomeImageComponent } from "../welcome-image/welcome-image.component";
import { AboutUsComponent } from "../about-us/about-us.component";
import { ServicesSliderComponent } from "../services-slider/services-slider.component";
import { TeamSliderComponent } from "../team-slider/team-slider.component";
import { LocationComponent } from "../location/location.component";
import { HeaderComponent } from "../../../common/header/header.component";
import { FooterComponent } from "../../../common/footer/footer.component";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [WelcomeImageComponent, AboutUsComponent, ServicesSliderComponent, TeamSliderComponent, LocationComponent, HeaderComponent, FooterComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}
