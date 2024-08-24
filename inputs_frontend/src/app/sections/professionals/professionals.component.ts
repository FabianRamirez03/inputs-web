import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-professionals',
  standalone: true,
  imports: [NgFor],
  templateUrl: './professionals.component.html',
  styleUrl: './professionals.component.scss'
})
export class ProfessionalsComponent {
  professionals = [
    { name: 'Dr. Juan Pérez', description: 'Especialista en fisioterapia deportiva.' },
    { name: 'Dra. María García', description: 'Experta en rehabilitación neurológica.' }
  ];

}
