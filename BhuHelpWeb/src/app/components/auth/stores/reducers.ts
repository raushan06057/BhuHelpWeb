import { createFeature, createReducer, on } from '@ngrx/store';
import { AuthStateInterface } from '../types/authstate.interface';
import { authActions } from './actions';

const initialState: AuthStateInterface = {
  isSubmitting: false,
  isLoading: false,
  validationErrors: null,
};

const authFeature=createFeature({
    name:'auth',
    reducer:createReducer(
        initialState,
        on(authActions.login,(state)=>({
            ...state,
            isLoading:true,
            isSubmitting:true,
            validationErrors:null
        })),
        on(authActions.loginSuccess,(state)=>({
            ...state
        }))
    )
})
