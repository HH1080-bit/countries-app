import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  constructor(private http:HttpClient) { }

  getAllCountries():Observable<HttpResponse<any>>{

    console.log("I Created a Service Mom!")

    return this.http.get<HttpResponse<any>>("https://restcountries.com/v3.1/all",{
      observe: 'response',

    })
    }

    // gettAllServicesMode(): Observable<HttpResponse<BaseResponse<any[]>>> {
    //   return this.http.get<BaseResponse<any[]>>(
    //     `${this.apiURL}${ApiRoutes.lookups.gettAllServicesMode}`,
    //     {
    //       observe: "response",
    //     }
    //   );
    // }
}
