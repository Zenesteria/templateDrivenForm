import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSemanticModule } from 'ngx-semantic';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormComponent,
    // FormsModule,
    RouterModule,
    ReactiveFormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'rxform';
}
