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
import * as bhuinfoListEffect from './components/bhuinfo/components/bhuinfo-list/stores/effects';
import * as getCountryEffect from './components/bhuinfo/components/create-bhuinfo/stores/effects';
import * as getGotraEffect from './components/bhuinfo/components/create-bhuinfo/stores/effects';
import * as getProfessionalsEffect from './components/bhuinfo/components/create-bhuinfo/stores/effects';
import * as getStatesEffect from './components/bhuinfo/components/create-bhuinfo/stores/effects';
import { authFeatureKey, authReducer } from './components/auth/stores/reducers';
import {
  createBhuInfoFeatureKey,
  createBhuInfoFeatureReducer,
} from './components/bhuinfo/components/create-bhuinfo/stores/reducers';
import {
  bhulistFeatureKey,
  bhuListFeatureReducer,
} from './components/bhuinfo/components/bhuinfo-list/stores/reducers';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './shared/fields/services/auth.interceptor';
export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withInterceptors([authInterceptor])),
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideAnimations(),
    provideStore(),
    provideState(authFeatureKey, authReducer),
    provideState(createBhuInfoFeatureKey, createBhuInfoFeatureReducer),
    provideState(bhulistFeatureKey, bhuListFeatureReducer),
    provideEffects(
      loginEffects,
      bhuinfoListEffect,
      getCountryEffect,
      getGotraEffect,
      getProfessionalsEffect,
      getStatesEffect
    ),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
      trace: false,
      traceLimit: 75,
    }),
  ],
};
