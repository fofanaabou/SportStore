import {CommonModule, CurrencyPipe, NgFor, NgForOf, NgIf} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import {Router, RouterModule} from '@angular/router';
import {ModelModule} from '../../model/model.module';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [RouterModule, CurrencyPipe, NgForOf, NgIf, NgFor, CommonModule, FormsModule, ModelModule, RouterModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  username?: string;
  password?: string;
  errorMessage?: string;

  constructor(private router: Router) {
  }

  authenticate(form: NgForm) {
    if (form.valid) {
      this.router.navigateByUrl("/admin/main");
    } else {
      this.errorMessage = "Form data Invalid"
    }
  }
}
