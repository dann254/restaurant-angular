import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  apiUrl:string = environment.baseUrl
  restaurantsEndpoint:string = 'restaurants/'
  filters:string = ''

  constructor(private http:HttpClient) { }

  getRestaurants(filters):Observable<any> {
    this.filters = filters
    return this.http.get(`${this.apiUrl}${this.restaurantsEndpoint}${this.filters}`);
  }
}
