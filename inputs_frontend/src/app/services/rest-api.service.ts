import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  // private baseUrl = 'https://inputs-backend-325938311fee.herokuapp.com';
  private baseUrl = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) { }

  // Método para obtener los terapeutas
  getTerapeutas(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/terapeuta`);
  }

  // Método para obtener los terapeutas
  getServicesNoBody(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/serviciosSinCuerpo`);
  }

  // Método para obtener los terapeutas
  getServices(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/servicios`);
  }

  // Método para enviar los datos del formulario
  sendContactForm(data: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/contactForm/`, data); // Asegúrate de que la URL es correcta
  }
}
