import { inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { BhuInfoService } from "../../../services/bhu-info.service";
import { bhuInfoSearchActions } from "./actions";
import { map, switchMap } from "rxjs";
import { BhuInfoListResponse } from "../../../types/bhu-info-list-response";
import { Router } from "@angular/router";

export const bhuinfoListEffect=createEffect(
    (
       actions$ = inject(Actions),
          bhuInfoService = inject(BhuInfoService)
    )=>{
        return actions$.pipe(
            ofType(bhuInfoSearchActions.bhuInfoSearch),
            switchMap(({searchBhuListRequest})=>{
                return bhuInfoService.get(searchBhuListRequest).pipe(
                    map((bhuinfoListResponse:BhuInfoListResponse)=>{
                        return bhuInfoSearchActions.bhuInfoSearchSuccess({bhuinfoListResponse});
                    })
                )
            })
        );
    },{functional:true}
);

export const goToCreatePageEffect = createEffect(
  (
    actions$ = inject(Actions),
    router = inject(Router)
  ) => {
    return actions$.pipe(
      ofType(bhuInfoSearchActions.bhuInfoSearchGoToCreateBhuInfoPage),
      map(() => {
        router.navigate(['bhu-info/create']);
        return { type: '[Router] Navigated to Create Page (no-op)' }; 
      })
    );
  },
  { functional: true, dispatch: false } 
);