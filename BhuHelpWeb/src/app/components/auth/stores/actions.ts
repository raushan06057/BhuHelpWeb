import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { LoginRequestInterface } from '../types/loginrequest.interface';
import { ResponseModel } from '../types/response.model';
import { LoginResponseModel } from '../types/login.response.model';

export const authActions = createActionGroup({
  source: 'auth',
  events: {
    Login: props<{ loginRequest: LoginRequestInterface }>(),
    'Login success': props<{
      loginResponse: ResponseModel<LoginResponseModel>;
    }>(),
    'Login failure': emptyProps(),
    Logout: emptyProps(),
    'Logout success': emptyProps(),
  },
});
