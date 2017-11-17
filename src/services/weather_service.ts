import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {CityWeather} from "../app/models/city_weather";
import 'rxjs/add/operator/toPromise';


@Injectable()
export class WeatherService {

  cityWeather: CityWeather;

  // public weather_url = 'http://api.openweathermap.org/data/2.5/group?id=524901&units=metric&appid=dbf4cb5b2de33296c3f3b7e0f7139783';
  public weather_url = 'http://api.openweathermap.org/data/2.5/group?id=524901,4164138,2643743&units=metric&appid=dbf4cb5b2de33296c3f3b7e0f7139783';

  constructor(public http: Http) {}

  getWeather(): Promise<CityWeather>{
    return this.http.get(this.weather_url, {headers: this.getAuthHeaders()}).toPromise().then(data => {
      this.cityWeather = data.json() as CityWeather;
      console.warn('DATAAAA', this.cityWeather);
      return this.cityWeather;
    });
  }

  getAuthHeaders(): Headers {
    let headers = new Headers();
    return headers;
  }
}
