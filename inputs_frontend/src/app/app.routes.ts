import { Routes } from '@angular/router';
import { LandingPageComponent } from "./sections/home/landing-page/landing-page.component";
import { ServicesHomeComponent } from './sections/services/services-home/services-home.component';

export  const routes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'servicios', component: ServicesHomeComponent },
  ];