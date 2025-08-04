import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { BhuInfoService } from '../../../services/bhu-info.service';
import { createBhuInfoActions } from './actions';
import { CountryModel } from '../../../types/country.model';
import { GotraModel } from '../../../types/gotra.model';
import { ProfessionalModel } from '../../../types/professional.model';
import { GetStateResponseInterface } from '../../../types/get-state.response';
import { GetStateRequestInterface } from '../../../types/get-state-request.interface';

export const getCountryEffect = createEffect(
  (actions$ = inject(Actions), bhuInfoService = inject(BhuInfoService)) => {
    return actions$.pipe(
      ofType(createBhuInfoActions.getCountry),
      switchMap(() =>
        bhuInfoService.getCountry().pipe(
          map((countriesResponse: CountryModel[]) => {
            return createBhuInfoActions.getCountrySuccess({ countriesResponse });
          })
        )
      )
    );
  },
  { functional: true }
);

export const getGotraEffect = createEffect(
  (actions$ = inject(Actions), bhuInfoService = inject(BhuInfoService)) => {
    return actions$.pipe(
      ofType(createBhuInfoActions.getGotra),
      switchMap(() =>
        bhuInfoService.getGotras().pipe(
          map((gotrasResponse: GotraModel[]) => {
            return createBhuInfoActions.getGotraSuccess({ gotrasResponse });
          })
        )
      )
    );
  },
  { functional: true }
);

export const getProfessionalsEffect = createEffect(
  (actions$ = inject(Actions), bhuInfoService = inject(BhuInfoService)) => {
    return actions$.pipe(
      ofType(createBhuInfoActions.getProfessional),
      switchMap(() =>
        bhuInfoService.getProfessional().pipe(
          map((professionalsResponse: ProfessionalModel[]) => {
            return createBhuInfoActions.getProfessionalSuccess({
              professionalsResponse,
            });
          })
        )
      )
    );
  },
  { functional: true }
);


export const getStatesEffect = createEffect(
  (
    actions$ = inject(Actions),
    bhuInfoService = inject(BhuInfoService)
  ) => {
    return actions$.pipe(
      ofType(createBhuInfoActions.getState),
      switchMap((action: { getStateRequestInterface: GetStateRequestInterface }) =>
        bhuInfoService.getStatesByCountryId(action.getStateRequestInterface).pipe(
          map((statesResponse: GetStateResponseInterface[]) =>
            createBhuInfoActions.getStateSuccess({ statesResponse })
          )
        )
      )
    );
  },
  { functional: true }
);