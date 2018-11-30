import { Injectable } from '@angular/core';
import { FoodSearch } from '../classes/food-search';
import { Subject, Observable } from 'rxjs';
import { CalEvent } from '../classes/cal-event';
import { ChartData } from '../classes/chart-data';
import { User } from '../classes/user';
import { Food } from '../classes/food';
import { Exercise } from '../classes/exercise';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  show = false;

  $listItems = new Subject<string>();

  username: string;
  password: string;

  currentfoodSearch: FoodSearch;
  foodSearchSubject = new Subject<FoodSearch>();

  currentfoodSearchArray: FoodSearch[];
  foodSearchArraySubject = new Subject<FoodSearch[]>();

  currentEvent: CalEvent;
  eventSubject = new Subject<CalEvent>();

  currentEventArray: CalEvent[];
  eventArraySubject = new Subject<CalEvent[]>();

  currentChartData: ChartData;
  chartDataSubject = new Subject<ChartData>();

  currentChartDataArray: ChartData[];
  chartDataArraySubject = new Subject<ChartData[]>();

  currentDate: Date;
  currentDateSubject = new Subject<Date>();

  currentUser: User;
  currentUserSubject = new Subject<User>();

  currentFoodArray: Food[];
  currentFoodArraySubject = new Subject<Food[]>();

  savedFood: Food[];
  savedFoodSubject = new Subject<Food[]>();

  savedExercise: Exercise[];
  savedExerciseSubject = new Subject<Food[]>();

  currentExerciseArray: Exercise[];
  currentExerciseArraySubject = new Subject<Exercise[]>();

  constructor() {}

  setCurrentSavedExercise(savedFoods: Exercise[]) {
    this.savedFoodSubject.next(<Exercise[]> savedFoods);
    this.savedFood = savedFoods;
  }

  setCurrentSavedFood(savedFoods: Food[]) {
    this.savedFoodSubject.next(<Food[]> savedFoods);
    this.savedFood = savedFoods;
  }

  setCurrentExerciseArray(exerciseArr: Exercise[]) {
    this.currentExerciseArraySubject.next(<Exercise[]> exerciseArr);
    this.currentExerciseArray = exerciseArr;
  }

  getCurrentExerciseArray() {
    return this.currentExerciseArray;
  }

  setCurrentFoodArray(foodArr: Food[]) {
    this.currentFoodArraySubject.next(<Food[]> foodArr);
    this.currentFoodArray = foodArr;
  }

  getCurrentFoodArray() {
    return this.currentFoodArray;
  }

  setCurrentUser(user: User) {
    this.currentUserSubject.next(<User> user);
    this.currentUser = user;
  }

  getCurrentUser() {
    return this.currentUser;
  }

  setCurrentDate(date: Date) {
    this.currentDateSubject.next(<Date> date);
    this.currentDate = date;
  }

  getCurrentDate() {
    return this.currentDate;
  }

  setChartData(chartData: any) {
    this.chartDataSubject.next(<ChartData> chartData);
  }

  setChartDataArray(chartDataArr: any) {
    this.chartDataArraySubject.next(<ChartData[]> chartDataArr);
  }

  setEvent(event: any) {
    this.eventSubject.next(<CalEvent> event);
  }

  setEventArray(eventArr: any) {
    this.eventArraySubject.next(<CalEvent[]> eventArr);
  }

  getfoodArray() {
    this.foodSearchSubject.next(this.currentfoodSearch);
  }

  getfood() {
    this.foodSearchArraySubject.next(this.currentfoodSearchArray);
  }

  setCurrentFoodSearch(foodSearch: any) {
    this.foodSearchSubject.next(<FoodSearch> foodSearch);
  }

  setCurrentFoodSearchArray(foodSearchArry: any[]) {
    this.foodSearchArraySubject.next(<FoodSearch[]> foodSearchArry);
  }

  submitNewValue(value: string) {
    this.$listItems.next(value);
  }

  setLogin(username: string, password: string) {
    this.username = username;
    this.password = password;
  }

  getUsername() {
    return this.username;
  }

  getPassword() {
    return this.password;
  }

  getShow() {

    return this.show;

  }

  setShow(show: boolean) {

    this.show = show;

  }

}
