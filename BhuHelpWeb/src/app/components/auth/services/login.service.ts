import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { LoginRequestInterface } from "../types/loginrequest.interface";
import { ResponseModel } from "../types/response.model";
import { CommonFields } from "../../../shared/fields/common-fields";
import { LoginResponseModel } from "../types/login.response.model";

@Injectable({
    providedIn:'any'
})
export class LoginService{
    private http=inject(HttpClient);
    login(data:LoginRequestInterface){
        return this.http.post<ResponseModel<LoginResponseModel>>(CommonFields.baseAPIUrl+CommonFields.authLoginUrl,data);
    }
}