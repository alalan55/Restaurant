import { Injectable } from '@angular/core';
import { retry } from 'rxjs/operators';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { Reserva, Cardapio } from '../model/reserva';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class ReservaService{

    reserva: Reserva;

    cardapio: Cardapio;

    url = 'http://localhost:3000/reserva'

    urlCardapio ='http://localhost:3001/cardapio'

    constructor(private http: HttpClient){}

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      }

      cadastraReserva(reserva: Reserva): Observable<Reserva>{
          return this.http.post<Reserva>(this.url, JSON.stringify(reserva), this.httpOptions)
      }
      getReservas(): Observable<Reserva[]>{
          return this.http.get<Reserva[]>(this.url)
      }


      // parte de cardapio

      getCardapio(): Observable<Cardapio[]>{
          return this.http.get<Cardapio[]>(this.urlCardapio).pipe(retry(1))
      }
    
}