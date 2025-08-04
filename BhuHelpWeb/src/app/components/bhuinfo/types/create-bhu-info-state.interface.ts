import { CountryModel } from './country.model';
import { GetStateResponseInterface } from './get-state.response';
import { GotraModel } from './gotra.model';
import { ProfessionalModel } from './professional.model';

export interface CreateBhuInfoStateInterface {
  isLoading: boolean;
  error: string | null;
  countries: CountryModel[] | null;
  gotras: GotraModel[] | null;
  professionals: ProfessionalModel[] | null;
  states: GetStateResponseInterface[] | null;
  lastNavigation: string | null;
}
