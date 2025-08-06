import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { BhuInfoService } from '../../../services/bhu-info.service';
import { createBhuInfoActions } from './actions';
import { CountryModel } from '../../../types/country.model';
import { GotraModel } from '../../../types/gotra.model';
import { ProfessionalModel } from '../../../types/professional.model';
import { GetStateResponseInterface } from '../../../types/get-state.response';
import { GetStateRequestInterface } from '../../../types/get-state-request.interface';
import { GetDistrictRequestInterface } from '../../../types/get-district-request.interface';
import { DistrictModel } from '../../../types/district.model';
import { PostOfficeModel } from '../../../types/post-office.model';
import { BhuInfoModel } from '../../../types/bhu-info.model';
import { of } from 'rxjs';
import { Router } from '@angular/router';

export const createBhuInfoEffects = createEffect(
  (
    actions$ = inject(Actions),
    bhuInfoService = inject(BhuInfoService)
  ) => {
    return actions$.pipe(
      ofType(createBhuInfoActions.createBhuInfo),
      switchMap(({ createBhuInfoRequestModel }) => {
        return bhuInfoService.create(createBhuInfoRequestModel).pipe(
          map((createBhuInfoResponseModel) =>
            createBhuInfoActions.createBhuInfoSuccess({ createBhuInfoResponseModel })
          ),
          catchError(() => of(createBhuInfoActions.createBhuInfoFailure()))
        );
      })
    );
  },
  { functional: true }
);

export const redirectAfterCreateEffect = createEffect(
  (actions$ = inject(Actions), router = inject(Router)) => {
    return actions$.pipe(
      ofType(createBhuInfoActions.createBhuInfoSuccess),
      tap(({createBhuInfoResponseModel}) => {
        router.navigate(['/bhu-info']);
      })
    )
  },
  {functional: true, dispatch: false}
)

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

export const getDistrictEffect = createEffect(
  (
    actions$ = inject(Actions),
    bhuInfoService = inject(BhuInfoService)
  ) => {
    return actions$.pipe(
      ofType(createBhuInfoActions.getDistrict),
      switchMap((action: { getDistrictRequestInterface: GetDistrictRequestInterface }) =>
        bhuInfoService.getDistrictsByStateId(action.getDistrictRequestInterface).pipe(
          map((districtResponse: DistrictModel[]) =>
            createBhuInfoActions.getDistrictSuccess({ districtResponse })
          )
        )
      )
    );
  },
  { functional: true }
);

export const getPostOfficeEffects = createEffect(
  (
    actions$ = inject(Actions),
    bhuInfoService = inject(BhuInfoService)
  ) => actions$.pipe(
    ofType(createBhuInfoActions.getPostOffice),
    switchMap(({ getPostOfficeRequestInterface }) =>
      bhuInfoService.getPostOfficesByDistrictId(getPostOfficeRequestInterface).pipe(
        map((postOfficeResponse: PostOfficeModel[]) =>
          createBhuInfoActions.getPostOfficeSuccess({ postOfficeResponse })
        )
      )
    )
  ),
  { functional: true }
);