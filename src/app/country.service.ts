import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Country } from '../app/models/country';
import { City } from '../app/models/city'

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private apiUrl = 'https://localhost:7058';

  constructor(private http: HttpClient) {}

  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiUrl}/Countries/List`).pipe(
      map((data) => {
        console.log('API Response:', data); // Log the response
        return data;
      })
    );
  }

  getCountryById(id: number): Observable<Country> {
    return this.http.get<Country>(`${this.apiUrl}/Countries/${id}`);
  }

  getCountryCities(id: number): Observable<City[]> {
    return this.http.get<City[]>(`${this.apiUrl}/Countries/${id}/Cities`);
  }
}