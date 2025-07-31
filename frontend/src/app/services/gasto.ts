import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Gasto {
  _id?: string;
  nombre: string;
  gasto: string;
  monto: number;
  informacion: string;
  createdAt?: string;
  updatedAt?: string;
}

@Injectable({
  providedIn: 'root'
})
export class GastoService {
  private apiUrl = 'http://localhost:3000/gastos';

  constructor(private http: HttpClient) {}

  getGastos(): Observable<Gasto[]> {
    return this.http.get<Gasto[]>(this.apiUrl);
  }

  getGasto(id: string): Observable<Gasto> {
    return this.http.get<Gasto>(`${this.apiUrl}/${id}`);
  }

  createGasto(gasto: Gasto): Observable<Gasto> {
    return this.http.post<Gasto>(this.apiUrl, gasto);
  }

  updateGasto(id: string, gasto: Gasto): Observable<Gasto> {
    return this.http.put<Gasto>(`${this.apiUrl}/${id}`, gasto);
  }

  deleteGasto(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
