export class CityWeather {
  list: [{
    name: string;
    main: [{
      tepm: number,
      temp_min: number,
      temp_max: number,
      pressure: number,
      humidity: number,
    }];
    wind: [{
      speed: number,
    }];
  }];
}
