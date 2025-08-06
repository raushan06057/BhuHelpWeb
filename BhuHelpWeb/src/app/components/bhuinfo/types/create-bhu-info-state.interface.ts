import { CountryModel } from './country.model';
import { DistrictModel } from './district.model';
import { GetStateResponseInterface } from './get-state.response';
import { GotraModel } from './gotra.model';
import { PostOfficeModel } from './post-office.model';
import { ProfessionalModel } from './professional.model';

export interface CreateBhuInfoStateInterface {
  isLoading: boolean;
  error: string | null;
  countries: CountryModel[] | null;
  states: GetStateResponseInterface[] | null;
  districts: DistrictModel[] | null;
  postOffices:PostOfficeModel[]|null;
  gotras: GotraModel[] | null;
  professionals: ProfessionalModel[] | null;
  lastNavigation: string | null;
}
