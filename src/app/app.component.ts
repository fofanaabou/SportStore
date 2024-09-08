import {Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from "./store/store.module";
import { RouterModule } from '@angular/router';
import { AdminModule } from './admin/admin.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, StoreModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
}
