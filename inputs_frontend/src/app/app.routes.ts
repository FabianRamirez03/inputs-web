import { Routes } from '@angular/router';
import { LandingPageComponent } from "./sections/home/landing-page/landing-page.component";
import { ServiceInfoComponent } from './sections/services/service-info/service-info.component';

export  const routes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'servicios/:serviceName', component: ServiceInfoComponent }
  ];