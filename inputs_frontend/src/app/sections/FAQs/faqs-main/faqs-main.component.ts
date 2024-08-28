import { Component } from '@angular/core';
import { HeaderComponent } from "../../../common/header/header.component";
import { FooterComponent } from "../../../common/footer/footer.component";

@Component({
  selector: 'app-faqs-main',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './faqs-main.component.html',
  styleUrl: './faqs-main.component.scss'
})
export class FAQsMainComponent {

}
