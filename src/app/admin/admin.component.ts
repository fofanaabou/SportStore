import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [RouterModule, AuthComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
 
}
