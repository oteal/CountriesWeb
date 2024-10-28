import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../country.service';
import { Country } from '../models/country';
import { City } from '../models/city'

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css'],
})
export class CountryDetailComponent implements OnInit {
  country!: Country;
  cities: City[] = [];
  constructor(private route: ActivatedRoute, private countryService: CountryService) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.countryService.getCountryById(id).subscribe((data) => {
      this.country = data;
    });
    this.countryService.getCountryCities(id).subscribe((data) => {
      this.cities = data;
    })
  }
}