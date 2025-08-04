import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PersistanceService } from '../../../shared/fields/services/persistance.service';
import { LoginService } from '../services/login.service';
import { authActions } from './actions';
import { map, switchMap, tap } from 'rxjs';
import { ResponseModel } from '../types/response.model';
import { Router } from '@angular/router';
import { LoginResponseModel } from '../types/login.response.model';

export const loginEffects = createEffect(
  (
    actions$ = inject(Actions),
    persistanceService = inject(PersistanceService),
    loginService = inject(LoginService)
  ) => {
    return actions$.pipe(
      ofType(authActions.login),
      switchMap(({ loginRequest }) => {
        return loginService.login(loginRequest).pipe(
          map((loginResponse: ResponseModel<LoginResponseModel>) => {
            persistanceService.updateToken(loginResponse.data);
            return authActions.loginSuccess({ loginResponse });
          })
        );
      })
    );
  },
  { functional: true }
);

export const redirectAfterLoginEffect = createEffect(
  (actions$ = inject(Actions), router = inject(Router)) => {
    return actions$.pipe(
      ofType(authActions.loginSuccess),
      tap(() => {
        router.navigate(['/bhu-info']);
      })
    );
  },
  { functional: true, dispatch: false }
);

export const logoutEffects = createEffect(
  (
    action$ = inject(Actions),
    persistanceService = inject(PersistanceService),
    router = inject(Router)
  ) => {
    return action$.pipe(
      ofType(authActions.logout),
      tap(() => {
        persistanceService.clearToken();
        router.navigate(['/']);
      })
    );
  },
  { functional: true }
);

//  logout$ = createEffect(
//     () =>
//       this.actions$.pipe(
//         ofType(logout),
//         tap(() => {
//           this.persistanceService.clearToken(); // clear BehaviorSubject
//           this.router.navigate(['/login']);     // redirect to login page
//         })
//       ),
//     { dispatch: false }
//   );
