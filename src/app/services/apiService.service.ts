import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Weather} from "../weather/weather";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService{

  constructor(private http: HttpClient) { }

  get(id: number): Observable<any> {
    return this.http.get<any>(`https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${environment.openweatherAPIKey}`)
  }
}
