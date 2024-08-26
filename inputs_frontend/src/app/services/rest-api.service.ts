import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

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
}
