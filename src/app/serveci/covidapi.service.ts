
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class CovidapiService {

  apiUrl : String;

  constructor(private http: HttpClient) {
  this.apiUrl = `https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/pr`;
   }




   obterdados(): Promise<any>{
    return this.http.get(`${this.apiUrl}`)
    .toPromise()
    .then(Response => Response);

   }

}
