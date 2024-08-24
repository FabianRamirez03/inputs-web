import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from "./sections/about/about.component";
import { ProfessionalsComponent } from "./sections/professionals/professionals.component";
import { ServicesComponent } from "./sections/services/services.component";
import { ContactComponent } from "./sections/contact/contact.component";
import { HeaderComponent } from "./common/header/header.component";
import { FooterComponent } from "./common/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AboutComponent, ProfessionalsComponent, ServicesComponent, ContactComponent, CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'inputs_frontend';
}
