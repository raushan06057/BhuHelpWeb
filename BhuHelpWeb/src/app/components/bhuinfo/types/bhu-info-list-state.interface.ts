import { BhuInfoListResponse } from './bhu-info-list-response';

export interface BhuInfoListStateInterface {
  isLoading: boolean;
  error: string | null;
  data: BhuInfoListResponse | null;
   lastNavigation: string|null,
}
