import { Component } from '@angular/core';
import { countries, ICountry, TCountries } from 'countries-list';
import { CountryService } from './form.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NotificationService } from './notification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  countryNames: string[] = [];

  constructor(private countryService: CountryService) {}

  ngOnInit(): void {
    this.countryNames = this.countryService.getCountryNames();
  }
}
