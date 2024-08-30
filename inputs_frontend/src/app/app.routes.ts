import { Routes } from '@angular/router';
import { LandingPageComponent } from "./sections/home/landing-page/landing-page.component";
import { ServiceInfoComponent } from './sections/services/service-info/service-info.component';
import { FAQsMainComponent } from './sections/FAQs/faqs-main/faqs-main.component';

export  const routes: Routes = [
    {path: "", redirectTo: "inicio", pathMatch: "full", title: 'Inputs Salud',},
    {path: "inicio", component: LandingPageComponent, title: 'Inputs Salud'},
    { path: 'servicios/:serviceName', component: ServiceInfoComponent, title: 'Inputs-Servicios' },
    { path: 'PreguntasFrecuentes', component: FAQsMainComponent, title: 'Inputs-Preguntas frecuentes'},
    { path: '**', redirectTo: '' }
  ];