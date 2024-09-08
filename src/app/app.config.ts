import { ApplicationConfig } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { StoreFirstGuard } from './storeFirst.guard';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [provideClientHydration(), provideRouter(routes), StoreFirstGuard,
    provideHttpClient(withFetch()), provideAnimationsAsync()
  ]
};
