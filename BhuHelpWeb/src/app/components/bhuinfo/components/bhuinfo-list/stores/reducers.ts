import { createFeature, createReducer, on } from '@ngrx/store';
import { BhuInfoListStateInterface } from '../../../types/bhu-info-list-state.interface';
import { bhuInfoSearchActions } from './actions';

const initialState: BhuInfoListStateInterface = {
  isLoading: false,
  error: null,
  data: null,
  lastNavigation: null,
};

const bhuListFeature = createFeature({
  name: 'bhulist',
  reducer: createReducer(
    initialState,
    on(bhuInfoSearchActions.bhuInfoSearch, (state) => ({
      ...state,
      isLoading: true,
    })),
    on(bhuInfoSearchActions.bhuInfoSearchSuccess, (state, action) => ({
      ...state,
      data: action.bhuinfoListResponse,
      isLoading: false,
    })),
    on(bhuInfoSearchActions.bhuInfoSearchFailure, (state) => ({
      ...state,
      isLoading: false,
    }))
  ),
});

export const {
  name: bhulistFeatureKey,
  reducer: bhuListFeatureReducer,
  selectIsLoading,
  selectError,
  selectData,
} = bhuListFeature;
