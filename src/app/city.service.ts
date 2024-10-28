import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private apiUrl = 'https://localhost:7058';

  constructor(private http: HttpClient) {}

  
}