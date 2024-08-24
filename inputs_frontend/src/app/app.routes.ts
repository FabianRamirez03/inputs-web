import { Routes } from '@angular/router';
import { LandingPageComponent } from "./sections/home/landing-page/landing-page.component";

export  const routes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'hola', component: LandingPageComponent },
  ];