import {Routes} from '@angular/router';
import {HomeComponent} from './home';
import {AboutComponent} from './about';
import {NoContentComponent} from './no-content';

import {DataResolver} from './app.resolver';
import {WeatherComponent} from "./weather/weather.component";

export const ROUTES: Routes = [
  {path: 'weather', component: WeatherComponent},
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'detail', loadChildren: './+detail#DetailModule'},
  {path: 'barrel', loadChildren: './+barrel#BarrelModule'},
  {path: '**', component: NoContentComponent},
];
