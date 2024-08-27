import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  private baseUrl = 'https://inputs-backend-325938311fee.herokuapp.com';

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
}
