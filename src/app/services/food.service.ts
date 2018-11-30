import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommunicationService } from './communication.service';
import { Food } from '../classes/food';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  headers = new HttpHeaders({
    'x-app-id': 'a4da862f',
    'x-app-key': 'a9711f22cede136435241e46453f833d'
  });
  options = {headers: this.headers };

  constructor(private httpClient: HttpClient,
              private commService: CommunicationService) { }

  queryFood(name) {
    const url = `https://trackapi.nutritionix.com/v2/natural/nutrients`;
    const payload = {
      query: name
    };
    this.httpClient.post(url, payload, this.options).subscribe( (food) => {
      this.commService.setCurrentFoodSearch(food);
      console.log(food);
    }, () => {
      this.commService.setCurrentFoodSearch(undefined);
    });
  }

  logFood(foodArr: Food[]) {
    const url = 'http://localhost:8080/food/log';
    this.httpClient.put(url, foodArr);
  }

  getFood(user: User) {
    const url = 'http://localhost:8080/food/calendar';
    this.httpClient.post<Food[]>(url, user).subscribe( (foodArr) => {
      this.commService.setCurrentFoodArray(foodArr);
      console.log(foodArr);
    }, () => {
      this.commService.setCurrentFoodArray(undefined);
    });
  }

  deleteFood(food: Food) {
    const url = `http://localhost:8080/food/`;
    this.httpClient.put<Food>(url, food);
  }
}
