import {Injectable} from '@angular/core';
import {Weather} from "../weather/weather";
import {ApiServiceService} from "./apiService.service";

@Injectable({
  providedIn: 'root'
})

export class WeatherService {

  public weather: Weather

  constructor(private apiServiceService: ApiServiceService) {
  }

  get(id: number): void {
    this.apiServiceService.get(id).subscribe(weather => this.weather = new Weather().deserialize(weather));
  }

}
