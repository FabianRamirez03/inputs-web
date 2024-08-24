import { NgFor } from '@angular/common';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-services-slider',
  standalone: true,
  imports: [NgFor],
  templateUrl: './services-slider.component.html',
  styleUrl: './services-slider.component.scss'
})
export class ServicesSliderComponent {
  @ViewChild('slider', { static: false }) slider!: ElementRef;
  services = [
    {
      title: 'Fisioterapia',
      description: 'Proin gravida condimentum sem in feugiat. Pellentesque non elit posuere, scelerisque nisi at, consequat ligula.',
      image: 'general/Services/Fisioterapia.webp',
      link: '/servicio-1'
    },
    {
      title: 'Entrenamiento semipersonalizado para adulto mayor',
      description: 'Ut sit amet bibendum risus. Sed vitae magna sed tellus maximus accumsan. Donec pellentesque mollis sapien ut sodales. In at eros diam.',
      image: 'general/Services/EntrenamientoAdultoMayor.jpg',
      link: '/servicio-2'
    },
    {
      title: 'Masaje terapéutico/deportivo ',
      description: 'Donec ultrices purus purus, ut gravida sem tempus ac. Morbi est diam, accumsan a convallis vel, tempor vel ex. Sed mollis eleifend dolor placerat scelerisque.',
      image: 'general/Services/masajeDeportivo.webp',
      link: '/servicio-2'
    },
    {
      title: 'Maderoterapia reductiva',
      description: 'Nam at tempor elit, sit amet faucibus lorem. Proin eget pharetra elit. Quisque pretium urna in sodales aliquet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'general/Services/maderoTerapia.jpeg',
      link: '/servicio-2'
    },
    

  ];

  constructor() { }

}