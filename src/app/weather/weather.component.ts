import {Component, OnInit} from '@angular/core';
import {WeatherService} from "./service/weather.service";
import {Weather} from "./weather";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  selectedCity: number

  constructor(public weatherService: WeatherService) {
  }

  ngOnInit(): void {
    this.weatherService.get(2796491)
  }

  updateCity(id: string){
    this.selectedCity = parseInt(id);
  }

  updateWeather(): void {
    this.weatherService.get(this.selectedCity);
  }

}
