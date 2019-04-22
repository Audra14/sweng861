import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Meal } from './meal'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  api_url : string = 'http://localhost:8080/mealplan'
  constructor(private httpClient: HttpClient) { }

  public getMeals(url? : string){
    return this.httpClient.get<Meal[]>(`${this.api_url}`);
  }
}
