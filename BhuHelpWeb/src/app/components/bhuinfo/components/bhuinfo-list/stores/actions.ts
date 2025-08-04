import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { SearchBhuInfoListInterface } from '../../../types/search-bhuinfo-list.interface';
import { BhuInfoListResponse } from '../../../types/bhu-info-list-response';

export const bhuInfoSearchActions = createActionGroup({
  source: 'bhuinfosearch',
  events: {
    BhuInfoSearch: props<{
      searchBhuListRequest: SearchBhuInfoListInterface;
    }>(),
    'BhuInfoSearch success': props<{
      bhuinfoListResponse: BhuInfoListResponse;
    }>(),
    'BhuInfoSearch failure': emptyProps(),
    'BhuInfoSearch go to create Bhu Info Page':emptyProps()
  },
});
