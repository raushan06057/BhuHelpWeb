import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { BhuInfoModel } from '../../../types/bhu-info.model';
import { ResponseModel } from '../../../../auth/types/response.model';
import { CountryModel } from '../../../types/country.model';
import { GotraModel } from '../../../types/gotra.model';
import { ProfessionalModel } from '../../../types/professional.model';
import { GetStateRequestInterface } from '../../../types/get-state-request.interface';
import { GetStateResponseInterface } from '../../../types/get-state.response';

export const createBhuInfoActions = createActionGroup({
  source: 'create-bhu-info',
  events: {
    CreateBhuInfo: props<{ createBhuInfoRequestModel: BhuInfoModel }>(),
    'create-bhu-info success': props<{
      createBhuInfoResponseModel: ResponseModel<BhuInfoModel>;
    }>(),
    'create-bhu-info failure': emptyProps(),
    GetCountry: emptyProps(),
    'Get country success': props<{
      countriesResponse: CountryModel[];
    }>(),
    'Get country failure': emptyProps(),
    GetGotra: emptyProps(),
    'Get gotra success': props<{
      gotrasResponse: GotraModel[];
    }>(),
    'Get gotra failure': emptyProps(),
    GetProfessional: emptyProps(),
    'Get professional success': props<{
      professionalsResponse: ProfessionalModel[];
    }>(),
    'Get professional failure': emptyProps(),
    GetState: props<{ getStateRequestInterface: GetStateRequestInterface }>(),
    'Get state success': props<{
      statesResponse: GetStateResponseInterface[];
    }>(),
    'Get state failure': emptyProps(),
  },
});
