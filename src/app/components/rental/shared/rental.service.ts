import { Injectable } from "@angular/core";
import { Rental } from './model/rental';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: "root"
})
export class RentalService {

  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getRentealById(rentalId: any): Observable<any> {
    return this.http.get(`/api/v1/rentals/${rentalId}`);
  }

  public getRentals(): Observable<any> {
    return this.http.get('/api/v1/rentals');
  }

}
