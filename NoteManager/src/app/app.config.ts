import { ApplicationConfig, isDevMode, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { routes } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideStore } from '@ngrx/store';
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimations(),
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    BrowserModule,
    provideStoreDevtools({ maxAge: 25 }),
    provideStore(),
  ]
};
