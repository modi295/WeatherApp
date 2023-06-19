import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WeatherData } from '../models/weather.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { }

  getWeatherData(cityName: string): Observable<WeatherData>{
    return this.http.get<WeatherData>(environment.weatherApiBaseUrl+'/'+cityName,{
      headers: new HttpHeaders()
      .set(environment.XRapidAPIHostHeaderName,environment.XRapidAPIHostHeaderValue)
      .set(environment.XRapidAPIKeyHeaderName,environment.XRapidAPIKeyHeaderValue),
    })
  }
}
