import { Component, OnInit, ViewChild } from '@angular/core';
import { countries, ICountry, TCountries } from 'countries-list';
import { CountryService } from './form.service';
import {
  Form,
  FormBuilder,
  FormGroup,
  FormsModule,
  NgForm,
} from '@angular/forms';
import { NotificationService } from './notification.service';
import { Router } from '@angular/router';
import { NgxSemanticModule } from 'ngx-semantic';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, NgxSemanticModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent implements OnInit {
  countryNames: { text: string; value: string }[] = [];
  isLoading = false;
  formDetails: formDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    country: 'Nigeria',
    occupation: 'Frontend Developer',
    isSuccessful: {
      True: false,
      False: true,
    },
  };

  occupations = [
    { text: 'Frontend Developer', value: 'Frontend Developer' },
    { text: 'Backend Developer', value: 'Backend Developer' },
    { text: 'Designer', value: 'Designer' },
    { text: 'Devops Engineer', value: 'Devops Engineer' },
  ];

  isEmail(email: string) {
    return /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(
      email
    );
  }

  isPhoneNumber(number: string) {
    return /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(
      number
    );
  }

  constructor(
    private countryService: CountryService,
    private notificationService: NotificationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.countryNames = this.countryService.getCountryNames();
  }

  load() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.isLoading = false;
        resolve('');
      }, 5000);
    });
  }

  async onSubmit(form: NgForm) {
    console.log(form.value);
    this.isLoading = true;

    // Success
    if (form.value.isSuccessful) {
      await this.load();
      this.notificationService.showSuccess(
        'Form submitted successfully!',
        'Success'
      );
      console.log('done');
      setTimeout(() => {
        this.router.navigate(['/success']);
      }, 5000);
      return;
    }

    // Error
    await this.load();
    this.notificationService.showError('Form error occurred', 'Error');
    setTimeout(() => {
      this.router.navigate(['/']);
    }, 2000);
    return;
  }
}

export class formDetails {
  firstName = '';
  lastName = '';
  email = '';
  phoneNumber = '';
  country = 'Nigeria';
  occupation = 'Frontend Developer';
  isSuccessful = {
    True: true,
    False: false,
  };
  // constructor(
  //   firstName: string,
  //   lastName: string,
  //   email: string,
  //   phoneNumber: string,
  //   country: string,
  //   occupation: string,
  //   isSuccessful: boolean
  // ) {}
}
