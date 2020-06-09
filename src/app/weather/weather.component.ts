import {Component, OnInit} from '@angular/core';
import {WeatherService} from "../services/weather.service";
import {CityService} from "../services/city.service";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  cities: Array<any> = []
  cityList: Array<any> = []

  constructor(public weatherService: WeatherService, private cityService: CityService) {
  }

  ngOnInit(): void {
    this.weatherService.get(2796491)
    this.cities = this.cityService.get();
  }

  updateWeather(id: string): void {
    this.weatherService.get(parseInt(id));
  }

  updateCityList(value: string) {
    this.cityList = this.cities.filter(city => {
      if (city.name.toLowerCase().includes(value.toLowerCase())) {
        return city;
      }
    })
  }

  getCityList(): Array<any> {
    if (this.cityList.length > 6) {
      return []
    }

    return this.cityList;
  }

}
