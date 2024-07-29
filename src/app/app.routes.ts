import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SuccessComponent } from './success/success.component';
import { FormComponent } from './form/form.component';

export const routes: Routes = [
  { path: '', component: FormComponent },
  { path: 'success', component: SuccessComponent },
];
