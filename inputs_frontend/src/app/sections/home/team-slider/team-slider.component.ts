import { Component, OnInit } from '@angular/core';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { RestApiService } from '../../../services/rest-api.service';

@Component({
  selector: 'app-team-slider',
  standalone: true,
  imports: [NgClass, NgFor, NgIf],
  templateUrl: './team-slider.component.html',
  styleUrls: ['./team-slider.component.scss']
})
export class TeamSliderComponent implements OnInit {


  teamMembers: any[] = [];

  constructor(private restApiService: RestApiService) {}

  ngOnInit(): void {
    this.loadTeamMembers();
  }

  loadTeamMembers(): void {
    this.restApiService.getTerapeutas().subscribe(
      (data) => {
        this.teamMembers = data.map(member => ({
          name: member.name,
          position: member.position,
          description: member.description,
          image: member.image.replace('gs://inputscr-db.appspot.com/', 'https://storage.googleapis.com/inputscr-db.appspot.com/'),
          socialLinks: [
            { platform: 'whatsapp', url: member.socialLinks.whatsapp || null },
            { platform: 'facebook', url: member.socialLinks.facebook || null },
            { platform: 'instagram', url: member.socialLinks.instagram || null },
            { platform: 'tiktok', url: member.socialLinks.tiktok || null }
          ].filter(link => link.url && link.url.trim() !== '') // Filtrar enlaces vacíos
        }));
      },
      (error) => {
        console.error('Error loading team members:', error);
      }
    );
  }
}
