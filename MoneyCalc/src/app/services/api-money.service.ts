import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ValutesBody } from '../entity/vatues';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiMoneyService {

  constructor(private _http: HttpClient) { }

  getValutes(): Observable<ValutesBody> {
    return this._http.get<ValutesBody>("https://www.cbr-xml-daily.ru/daily_json.js", {
      headers: new HttpHeaders({
        "Accept": "text/plain",
        'Access-Control-Allow-Origin': '*',
        responseType: "json",
      })
    })
  }
}
