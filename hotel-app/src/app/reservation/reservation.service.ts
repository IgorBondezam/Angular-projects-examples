import { Injectable } from '@angular/core';
import {Reservation} from "../models/reservation";
import {HttpClient} from "@angular/common/http";
import {ReservationModule} from "./reservation.module";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private apiUrl: string = 'http://localhost:3001';
  private reservations: Reservation[] = [];

  constructor(private http: HttpClient) {
  }

  getReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(this.apiUrl + "/reservations");
  }

  getReservationById(id: string): Observable<Reservation> {
    return this.http.get<Reservation>(this.apiUrl + "/reservation/" + id);
  }

  addReservation(reservation: Reservation): Observable<void>{
    return this.http.post<void>(this.apiUrl + "/reservation", reservation);
  }

  deleteReservationById(id: string): Observable<void> {
    return this.http.delete<void>(this.apiUrl + "/reservation/" + id);
  }

  updateReservation(id: string, updatedReservation: Reservation): Observable<void>{
    return this.http.put<void>(this.apiUrl + "/reservation/" + id, updatedReservation);
  }

}
