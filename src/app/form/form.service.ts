import { Injectable } from '@angular/core';
import { countries, TCountries } from 'countries-list';

interface Country {
  name: string;
  native: string;
  phone: string;
  continent: string;
  capital: string;
  currency: string;
  languages: string[];
  emoji: string;
  emojiU: string;
}

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private countriesList: any = countries;

  constructor() {}

  getCountryNames(): { text: string; value: string }[] {
    return Object.keys(this.countriesList).map((code) => ({
      text: this.countriesList[code].name,
      value: this.countriesList[code].name,
    }));
  }
}
