import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
  isDevMode,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideState, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import * as loginEffects from './components/auth/stores/effects';
import { authFeatureKey, authReducer } from './components/auth/stores/reducers';
import { provideHttpClient } from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';
export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    AgGridModule,
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideAnimations(),
    provideStore(),
    provideState(authFeatureKey, authReducer),
    provideEffects(loginEffects),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
      trace: false,
      traceLimit: 75,
    }),
  ],
};
