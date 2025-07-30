import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PersistanceService } from '../../../shared/fields/services/persistance.service';
import { LoginService } from '../services/login.service';
import { authActions } from './actions';
import { map, switchMap, tap } from 'rxjs';
import { ResponseModel } from '../types/response.model';
import { Router } from '@angular/router';

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
          map((loginResponse: ResponseModel) => {
            persistanceService.updateToken(loginResponse.data);
            return authActions.loginSuccess({loginResponse});
          })
        );
      })
    );
  },
  { functional: true }
);

export const redirectAfterLoginEffect=createEffect(
    (
        actions$=inject(Actions),
        router=inject(Router)
    )=>{
        return actions$.pipe(
            ofType(authActions.loginSuccess),
            tap(()=>{
                router.navigate(['/bhu-info']);
            })
        )        
    },{functional:true,dispatch:false}
)