import {Deserializable} from "../shared/models/deserializable.model";


export class Weather implements Deserializable {
  private "coord": { lon: number; lat: number; };
  private "weather": [{ id: number; main: string; description: string; icon: string; }];
  private "base": string;
  private "main": { temp: number; pressure: number; humidity: number; temp_min: number; temp_max: number; };
  private "visibility": number;
  private "wind": { speed: number; deg: number; };
  private "clouds": { all: number; };
  private "dt": number;
  private "sys": { type: number; id: number; message: number; country: string; sunrise: number; sunset: number; };
  private "timezone": number
  private "id": number;
  private "name": string;
  private "cod": number;

  constructor() {
  }


  get Name(): string {
    if (this.name) {
      return this.name;
    }
    return ""
  }

  get Temperature(): number {
    if (this.main.temp) {
      return Weather.covertKelvinToCelcius(this.main.temp);
    }
    return 0
  }

  get MinTemperature(): number {
    return Weather.covertKelvinToCelcius(this.main.temp_min);
  }

  get MaxTemperature(): number {
    return Weather.covertKelvinToCelcius(this.main.temp_max);
  }

  get Humidity(): number {
    return 80;
  }

  get Sunrise(): String {
    const date = Weather.convertEpochToDate(this.sys.sunrise, this.timezone);
    return Weather.formatToDisplayHours(date);

  }

  get Sunset(): String {
    const date = Weather.convertEpochToDate(this.sys.sunset, this.timezone);
    return Weather.formatToDisplayHours(date);
  }

  private static covertKelvinToCelcius(temperature: number): number {
    return Math.round((temperature - 273.15) * 10) / 10;
  }

  private static formatToDisplayHours(date: Date): string {
    return `${date.getHours()}:${date.getMinutes()}`
  }

  private static convertEpochToDate(time: number, timezone: number): Date {
    return new Date((time + timezone) * 1000);
  }

  deserialize(input: any): this {
    Object.assign(this, input)
    return this;
  }
}




