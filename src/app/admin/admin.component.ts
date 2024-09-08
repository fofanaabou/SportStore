import { Component } from '@angular/core';
import {Router, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AdminModule } from './admin.module';
import { CommonModule, CurrencyPipe, NgFor, NgForOf, NgIf } from '@angular/common';
import { AuthService } from '../model/auth.service';
import { MaterialFeatures } from './material.features';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    CurrencyPipe,
    NgForOf,
    NgIf,
    NgFor,
    CommonModule,
    MaterialFeatures,
    RouterModule, AuthComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  
  constructor(private auth: AuthService, private router: Router) {
  }
  
  logout() {
    this.auth.clear();
    this.router.navigateByUrl("/");
  }
 
}
