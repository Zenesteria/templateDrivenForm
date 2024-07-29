import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { FormComponent } from "./form/form.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormComponent, FormsModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'rxform';
}
