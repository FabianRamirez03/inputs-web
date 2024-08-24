import { Component, HostListener  } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  private lastScrollTop = 0;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event): void {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    const navbar = document.querySelector('.custom-navbar') as HTMLElement;

    if (currentScroll > this.lastScrollTop) {
      navbar.classList.add('header-hidden');
      navbar.classList.remove('header-visible');
    } else {
      navbar.classList.remove('header-hidden');
      navbar.classList.add('header-visible');
    }

    this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  }

}
