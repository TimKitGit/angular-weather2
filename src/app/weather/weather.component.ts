import {Component, OnInit} from '@angular/core';
import {CityWeather} from "../models/city_weather";
import {WeatherService} from "../../services/weather_service";

@Component({
  selector: 'app-weather',
  providers: [WeatherService],
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  cityWeather: CityWeather;

  constructor(public weatherService: WeatherService) {
  }

  ngOnInit() {
    this.getWeather();
  }

  getWeather() {
    this.weatherService.getWeather().then(data => {
      this.cityWeather = data;
      console.log('weather', this.cityWeather);
    });
  }

}
