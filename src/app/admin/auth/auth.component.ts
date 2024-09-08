import {CommonModule, CurrencyPipe, NgFor, NgForOf, NgIf} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import {Router, RouterModule} from '@angular/router';
import {ModelModule} from '../../model/model.module';
import {AuthService} from '../../model/auth.service';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CurrencyPipe, NgForOf, NgIf, NgFor, CommonModule, FormsModule, RouterModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  username?: string;
  password?: string;
  errorMessage?: string;

  constructor(private router: Router, private auth: AuthService) {
  }

  authenticate(form: NgForm) {
    if (form.valid) {
      this.auth.authenticate(this.username ?? "", this.password ?? "")
        .subscribe(response => {
          if (response) {
            this.router.navigateByUrl("/admin/main");
          }
          this.errorMessage = "Authentication failed";
        })
    } else {
      this.errorMessage = "Form data Invalid"
    }
  }
}
