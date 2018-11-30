import { Component, OnInit } from '@angular/core';
import { CommunicationService } from 'src/app/services/communication.service';
import { Subscription } from 'rxjs';
import { FoodService } from 'src/app/services/food.service';
import { FoodSearch } from 'src/app/classes/food-search';
import { Food } from 'src/app/classes/food';

@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.css']
})

export class AddFoodComponent implements OnInit {
  // add 'missing input' arrow boolean later after form is formatted
  inputSearch: string;
  foodSubscription: Subscription;
  foodSearch: any;
  foodSearchArray: FoodSearch[];
  something: any;
  stringForCals: string;
  calories: number;
  newCalories: number;
  servingQuantity: number;
  servingUnit;
  servingSize: number;
  food: string;
  date: string;
  foodItem = new Food(
    0,
    '',
    '',
    0,
    this.commService.getCurrentUser().id
  );
  foodArray: Food[] = new Array(0);
  invalidInput = false;

  constructor(
    private commService: CommunicationService,
    private foodService: FoodService) { }

  ngOnInit() {

  }
  search() {
    this.foodSubscription = this.commService.foodSearchSubject.subscribe((something) => {
      this.foodSearch = something;
      // console.log(something);
      this.stringForCals = JSON.stringify(this.foodSearch);
      console.log(JSON.stringify(this.foodSearch));
      console.log((JSON.stringify(this.foodSearch)).indexOf('nf_calories'));
      console.log((JSON.stringify(this.foodSearch)).indexOf('nf_total_fat'));
      console.log((this.stringForCals.substring((this.stringForCals.indexOf('nf_calories') + 13),
        (this.stringForCals.indexOf('nf_total_fat') - 2))));
      this.calories = parseFloat(this.stringForCals.substring((this.stringForCals.indexOf('nf_calories') + 13),
        (this.stringForCals.indexOf('nf_total_fat') - 2)));
      console.log(this.calories);
      this.servingQuantity = parseFloat(this.stringForCals.substring((this.stringForCals.indexOf('serving_qty') + 13),
        (this.stringForCals.indexOf('serving_unit') - 2)));
      console.log(this.servingQuantity);
      this.servingUnit = this.stringForCals.substring((this.stringForCals.indexOf('serving_unit') + 15),
        (this.stringForCals.indexOf('serving_weight_grams') - 3));
      console.log(this.servingUnit);
    });
    this.foodService.queryFood(this.food);

  }
  calculateCalories() {
    if (this.servingSize === undefined) {
      this.servingSize = 1;
    }
    // manipulate the amount of calories by multiplying the serving size by the amount of calories
      this.newCalories = this.calories * this.servingSize;
      console.log(this.newCalories);
      // has to multiply by the original calories and return original if it is coverted back to one
    }



  addFoodItem() {
    this.invalidInput = false;
    // if (this.date.length < 10) {

    // }
    const newFoodItem = new Food (
      0,
      this.food,
      (this.date.substr(5, 5) + '-' + this.date.substring(0, 4)),
      this.newCalories,
      this.commService.getCurrentUser().id
    );
    // if (this.date.includes('0')) {
    //   this.date = this.date.substring(0, this.date.indexOf('0'))
    //    + this.date.substring(this.date.indexOf('0') + 1);
    // }
    // this.foodItem.date = this.date;
    // this.foodItem.name = this.food;
    // this.foodItem.calories = this.newCalories;
    if ( (this.date === undefined)
    || (this.food === undefined)
    || (this.newCalories === undefined) ) {
      this.invalidInput = true;
    } else {
      this.foodArray.push(newFoodItem);
    }
    console.log(newFoodItem);
    // console.log(this.foodItem);
    console.log(this.foodArray);
  }

  removeFoodItem() {
    this.foodArray.pop();
    console.log(this.foodArray);
  }

  submit() {
    console.log(this.foodArray);
    this.foodService.logFood(this.foodArray);
  }

}
