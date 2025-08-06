import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { SearchBhuInfoListInterface } from '../types/search-bhuinfo-list.interface';
import { BhuInfoListResponse } from '../types/bhu-info-list-response';
import { CommonFields } from '../../../shared/fields/common-fields';
import { ResponseModel } from '../../auth/types/response.model';
import { forkJoin, map, Observable } from 'rxjs';
import { CountryModel } from '../types/country.model';
import { GotraModel } from '../types/gotra.model';
import { ProfessionalModel } from '../types/professional.model';
import { GetStateRequestInterface } from '../types/get-state-request.interface';
import { GetStateResponseInterface } from '../types/get-state.response';
import { GetDistrictRequestInterface } from '../types/get-district-request.interface';
import { DistrictModel } from '../types/district.model';
import { GetPostOfficeRequestInterface } from '../types/get-postoffice-request.interface';
import { PostOfficeModel } from '../types/post-office.model';
@Injectable({
  providedIn: 'any',
})
export class BhuInfoService {
  private http = inject(HttpClient);
  get(searchBhuListRequest: SearchBhuInfoListInterface) {
    let params = new HttpParams()
      .set('page', searchBhuListRequest.page)
      .set('pageSize', searchBhuListRequest.pageSize)
      .set('search', searchBhuListRequest.search);

    return this.http
      .get<ResponseModel<BhuInfoListResponse>>(
        CommonFields.baseAPIUrl + CommonFields.bhuInfosUrl,
        {
          params,
        }
      )
      .pipe(map((resp) => resp.data));
  }

  getCountry(): Observable<CountryModel[]> {
    var result = this.http
      .get<ResponseModel<CountryModel[]>>(
        `${CommonFields.baseAPIUrl}${CommonFields.countriesUrl}`
      )
      .pipe(map((response) => response.data));
    return result;
  }

  getGotras(): Observable<GotraModel[]> {
    var result = this.http
      .get<ResponseModel<GotraModel[]>>(
        `${CommonFields.baseAPIUrl}${CommonFields.gotrasUrl}`
      )
      .pipe(map((response) => response.data));
    return result;
  }

  getProfessional(): Observable<ProfessionalModel[]> {
    var result = this.http
      .get<ResponseModel<ProfessionalModel[]>>(
        `${CommonFields.baseAPIUrl}${CommonFields.professionalsUrl}`
      )
      .pipe(map((response) => response.data));
    return result;
  }

  getStatesByCountryId(
    request: GetStateRequestInterface
  ): Observable<GetStateResponseInterface[]> {
    var result = this.http
      .get<ResponseModel<GetStateResponseInterface[]>>(
        `${CommonFields.baseAPIUrl}${CommonFields.statesUrl}${request.countryId}`
      )
      .pipe(map((response) => response.data));
    return result;
  }

  getDistrictsByStateId(
    request: GetDistrictRequestInterface
  ): Observable<DistrictModel[]> {
    var result = this.http
      .get<ResponseModel<DistrictModel[]>>(
        `${CommonFields.baseAPIUrl}${CommonFields.districtsUrl}${request.stateId}`
      )
      .pipe(map((response) => response.data));
    return result;
  }

    getPostOfficesByDistrictId(
    request: GetPostOfficeRequestInterface
  ): Observable<PostOfficeModel[]> {
    var result = this.http
      .get<ResponseModel<PostOfficeModel[]>>(
        `${CommonFields.baseAPIUrl}${CommonFields.PostOfficesUrl}${request.districtId}`
      )
      .pipe(map((response) => response.data));
    return result;
  }
}
