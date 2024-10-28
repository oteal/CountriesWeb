import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country.service';
import { Country } from '../models/country';
import { Router } from '@angular/router';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css'],
})
export class CountryListComponent implements OnInit {
  countries: Country[] = [];
  currentIndex = 0;
  visibleItems = 3; // Number of items to display at a time

  constructor(private countryService: CountryService, private router: Router) {}

  ngOnInit(): void {
    this.countryService.getCountries().subscribe((data) => {
      this.countries = data;
    },
    (error) => {
      console.error('Error fetching countries:', error); // Log any errors
    });
  }

  viewDetails(id: number): void {
    this.router.navigate(['/country', id]);
  }

  next() {
    if (this.currentIndex < this.countries.length - this.visibleItems) {
      this.currentIndex++;
    }
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  getTranslateValue() {
    return `translateX(-${(this.currentIndex * (100 / this.visibleItems))}%)`; // Calculate translation
  }
}