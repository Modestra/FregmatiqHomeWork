import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ValutesBody } from '../entity/vatues';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiMoneyService {

  private http:HttpClient;
  constructor(private _http: HttpClient) {
    this.http = this._http
   }

  getValutes(): Observable<ValutesBody> {
    return this._http.get<ValutesBody>("https://www.cbr-xml-daily.ru/daily_json.js", {
      headers: new HttpHeaders({
        "Accept": "application/json",
      }, )
    })
  }
}
