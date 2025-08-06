import { createFeature, createReducer, on } from '@ngrx/store';
import { CreateBhuInfoStateInterface } from '../../../types/create-bhu-info-state.interface';
import { createBhuInfoActions } from './actions';

const initialState: CreateBhuInfoStateInterface = {
  isLoading: false,
  error: null,
  countries: null,
  states: null,
  districts: null,
  postOffices:null,
  gotras: null,
  professionals: null,
  lastNavigation: null,
};

const createBhuListFeature = createFeature({
  name: 'crate-bhu-info',
  reducer: createReducer(
    initialState,
    on(createBhuInfoActions.getCountry, (state) => ({
      ...state,
      isLoading: true,
    })),
    on(createBhuInfoActions.getCountrySuccess, (state, action) => ({
      ...state,
      countries: action.countriesResponse,
    })),
    on(createBhuInfoActions.getGotra, (state) => ({
      ...state,
      isLoading: true,
    })),
    on(createBhuInfoActions.getGotraSuccess, (state, action) => ({
      ...state,
      gotras: action.gotrasResponse,
    })),
    on(createBhuInfoActions.getProfessional, (state) => ({
      ...state,
      isLoading: true,
    })),
    on(createBhuInfoActions.getProfessionalSuccess, (state, action) => ({
      ...state,
      professionals: action.professionalsResponse,
    })),
    on(createBhuInfoActions.getState, (state) => ({
      ...state,
      isLoading: true,
    })),
    on(createBhuInfoActions.getStateSuccess, (state, action) => ({
      ...state,
      states: action.statesResponse,
      isLoading: false,
    })),
    on(createBhuInfoActions.getDistrict, (state) => ({
      ...state,
      isLoading: true,
    })),
    on(createBhuInfoActions.getDistrictSuccess, (state, action) => ({
      ...state,
      isLoading: false,
      districts: action.districtResponse,
    })),
       on(createBhuInfoActions.getPostOffice, (state) => ({
      ...state,
      isLoading: true,
    })),
    on(createBhuInfoActions.getPostOfficeSuccess, (state, action) => ({
      ...state,
      isLoading: false,
      postOffices: action.postOfficeResponse,
    }))
  ),
});
export const {
  name: createBhuInfoFeatureKey,
  reducer: createBhuInfoFeatureReducer,
  selectIsLoading,
  selectCountries,
  selectStates,
  selectDistricts,
  selectPostOffices,
  selectGotras,
  selectProfessionals,
} = createBhuListFeature;
