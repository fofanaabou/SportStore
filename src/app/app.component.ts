import {Component, signal, Signal} from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreComponent} from "./store/store.component";
import {StoreModule} from "./store/store.module";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, StoreModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
}
