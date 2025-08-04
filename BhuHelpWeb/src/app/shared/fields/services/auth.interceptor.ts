import {HttpInterceptorFn} from '@angular/common/http'
import {inject} from '@angular/core'
import { PersistanceService } from './persistance.service';

export const authInterceptor: HttpInterceptorFn = (request, next) => {
let tokenVal:any;
  const persistanceService = inject(PersistanceService);
    persistanceService.currentToken$.subscribe(token => {
      tokenVal = token;
      console.log('Token from service:', token);
    });

  request = request.clone({
    setHeaders: {
     Authorization: tokenVal ? `Bearer ${tokenVal}` : '',
    },
  })
  return next(request)
}