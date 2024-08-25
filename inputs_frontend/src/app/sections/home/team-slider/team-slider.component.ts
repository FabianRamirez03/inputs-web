import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-team-slider',
  standalone: true,
  imports: [NgClass, NgFor],
  templateUrl: './team-slider.component.html',
  styleUrl: './team-slider.component.scss'
})
export class TeamSliderComponent {
  teamMembers = [
    {
      name: 'Marian Chaves',
      position: 'Fisioterapeuta',
      description: 'Fusce lobortis, quam auctor ornare eleifend, nisi tellus ornare diam, at porttitor diam urna nec magna.',
      image: 'general/team/marian.jpg',
      socialLinks: [
        { platform: 'facebook', url: '#' },
        { platform: 'instagram', url: 'https://www.instagram.com/marian.terapiafisica' },
        { platform: 'tiktok', url: '#' }
      ]
    },
    {
      name: 'Esteban Ramírez',
      position: 'Fisioterapeuta',
      description: 'Donec eget nisi eu quam fermentum aliquet. Morbi dignissim accumsan purus nec rhoncus.',
      image: 'general/team/Esteban.jpg',
      socialLinks: [
        { platform: 'facebook', url: '#' },
        { platform: 'instagram', url: 'https://www.instagram.com/fisio.esteban' },
        { platform: 'tiktok', url: '#' }
      ]
    },
    {
      name: 'MariLau',
      position: 'Fisioterapeuta',
      description: 'Donec eget nisi eu quam fermentum aliquet. Morbi dignissim accumsan purus nec rhoncus.',
      image: 'general/team/MariLau.jpg',
      socialLinks: [
        { platform: 'facebook', url: '#' },
        { platform: 'instagram', url: '#' },
        { platform: 'tiktok', url: '#' }
      ]
    },
    
    
  ];

}
