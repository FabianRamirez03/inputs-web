import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestApiService } from '../../../services/rest-api.service';
import { NgIf } from '@angular/common';
import { MarkdownModule, MarkdownService } from 'ngx-markdown';
import { marked } from 'marked';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-service-info',
  standalone: true,
  imports: [NgIf, MarkdownModule],
  providers: [MarkdownService],
  templateUrl: './service-info.component.html',
  styleUrls: ['./service-info.component.scss'],
})
export class ServiceInfoComponent implements OnInit {
  service: any;
  serviceInfo: any;
  serviceBody: string = ''; // Markdown body
  serviceBodyHtml: string = ''; // Rendered HTML from Markdown
  
  constructor(
    private route: ActivatedRoute,
    private RestApiService: RestApiService,
    private http: HttpClient
  ) { }

   ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const serviceName = params.get('serviceName');
      if (serviceName) {
        this.loadService(serviceName);
      }
    });
  }

  async loadService(serviceName: string): Promise<void> {
    // Convert the serviceName back to the expected format for API requests
    const formattedName = serviceName.replace(/-/g, ' ');
    this.RestApiService.getServices().subscribe(
      async (data) => {
        this.service = data.find(service => service.name.toLowerCase().replace(/\s+/g, '-') === serviceName);
        if (this.service) {
          const markdownFileUrl = this.service.body; // `body` debería ser la URL del archivo Markdown
          try {
            // Configurar marked para manejar saltos de línea
            const renderer = new marked.Renderer();
            renderer.paragraph = (text) => `<p>${text}</p>\n`; // Asegura que los saltos de línea en párrafos se mantengan

            marked.setOptions({
              renderer: renderer,
              breaks: true, // Esto asegura que los saltos de línea en Markdown se conviertan en <br> en HTML
              gfm: true // Asegura compatibilidad con Markdown de GitHub
            });

            // Descargar el archivo Markdown
            const markdownContent = await this.http.get(markdownFileUrl, { responseType: 'text' }).toPromise();
            this.serviceBodyHtml = await marked.parse(String(markdownContent));
          } catch (error) {
            console.error('Error processing Markdown:', error);
            this.serviceBodyHtml = '';
          }
        }
      },
      (error) => {
        console.error('Error loading service:', error);
      }
    );
  }
}
