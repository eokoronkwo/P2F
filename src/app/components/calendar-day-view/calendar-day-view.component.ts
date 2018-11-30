import { Component, OnInit, OnChanges, DoCheck, ChangeDetectionStrategy, Input, ChangeDetectorRef } from '@angular/core';
// import { Chart } from 'chart.js';
import { CalendarEvent } from 'calendar-utils';
// Load FusionCharts
import * as FusionCharts from 'fusioncharts';
// Load Charts module
import * as Charts from 'fusioncharts/fusioncharts.charts';
// Load fusion theme
import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import { ChartData } from 'src/app/classes/chart-data';
import { UserService } from 'src/app/services/user.service';
import { CommunicationService } from 'src/app/services/communication.service';
import { Subscription, Observable } from 'rxjs';
import { Chart } from 'highcharts';
import { Food } from 'src/app/classes/food';
import { Exercise } from 'src/app/classes/exercise';

interface Model {
    product: string;
    sales: number;
}
interface Cals {
    label: string;
    value: number;
}
@Component({
    selector: 'app-calendar-day-view',
    templateUrl: './calendar-day-view.component.html',
    styleUrls: ['./calendar-day-view.component.css'],
    changeDetection: ChangeDetectionStrategy.Default
})
export class CalendarDayViewComponent implements OnInit, OnChanges {

    @Input()
    data: Date;
    items = Array.from({length: 100000}).map((_, i) => `Item #${i}`);
    chart: Chart;
    changeDetected: boolean;
    dateSubscription: Subscription;
    chartDataSubscription: Subscription;
    chartDataArraySubscription: Subscription;
    newChartData = new ChartData(
        '',
        0,
    );
    food: Food;
    foodA = Array<Food>(
    );
    // newConvertedChartData = new ConvertedChartData(
    //     '',
    //     0
    // );
    importedChartDataArray: any[];
    convertedChartDataArray: ChartData[];
    i: number;
    j: number;
    viewDate: Date;
    viewDateStringConversion: string;
    foodArr: Food[];
    exerciseArr: Exercise[];

    chartConfig = {
        width: '500',
        height: '300',
        type: 'column3d',
        dataFormat: 'json',
        theme: 'fusion',
    };

    dataSource = {
        'chart': {
            'caption': 'Calorie Comparison',
            'xAxisName': 'Calories',
            'yAxisName': 'Amount',
            'theme': 'gammel',
            'palette': '5',
            'paletteColors': '#000000, #0372AB, #FF5904'
        },
        data: []
    };

    // exercisees

    updateChartData() {
        // for (this.i = 0; this.i < this.dataSource.data.length; this.i++) {
        //     this.dataSource.data[this.i].value = 0;
        // }
        this.dataSource.data = [];
        console.log(this.dataSource.data);
    }


    constructor(private userService: UserService,
        private commService: CommunicationService,
        private cdRef: ChangeDetectorRef) { }


    public convertViewDate(date: Date) {
        return this.viewDateStringConversion = date.toLocaleDateString();
    }

    ngOnInit() {
        this.viewDate = this.commService.getCurrentDate();
        this.foodArr = this.commService.getCurrentFoodArray();
        this.exerciseArr = this.commService.getCurrentExerciseArray();
        console.log(this.foodArr);
        console.log(this.exerciseArr);
        console.log(this.viewDate.toLocaleDateString());
        console.log( this.viewDate.toLocaleDateString().substring(0, this.viewDate.toLocaleDateString().indexOf('0'))
        + this.viewDate.toLocaleDateString().substring(this.viewDate.toLocaleDateString().indexOf('0') + 1));
        this.convertChartData();
        console.log(this.viewDate.toLocaleString());
        // .slice(this.viewDate.toLocaleString().indexOf('0'), (this.viewDate.toLocaleString().indexOf('0') + 1)));
        console.log(this.viewDate.toDateString());
        console.log(this.viewDate.toISOString());
        console.log(this.viewDate.toJSON());
        console.log(this.viewDate.toTimeString());
        console.log(this.viewDate.toUTCString());
        console.log(this.viewDate.toString());
        // this.chartDataArraySubscription = this.commService.chartDataArraySubject
        //     .subscribe((chartDataArr) => {
        //         this.importedChartDataArray = chartDataArr;
        //         console.log(this.importedChartDataArray);
        //         this.convertChartData();
        //         this.dataSource.data = this.convertedChartDataArray;
        //     });
        // this.convertViewDate(this.viewDate);
        // console.log(this.viewDateStringConversion);
        // this.userService.getChartData();
    }

    // ngDoCheck() {
    //     if (this.viewDate.toString() !== this.viewDateStringConversion) {
    //         this.changeDetected = true;
    //         this.convertViewDate(this.viewDate);
    //     }
    //     if ((this.dataSource.data = null)) {
    //         this.convertChartData();
    //     } else {
    //         this.dataSource.data = null;
    //     }
    // }

    ngOnChanges() {
        console.log('yes');
        this.dateSubscription =
        this.commService.currentDateSubject.subscribe((date) => {
            this.viewDate = date;
            // console.log(this.viewDate);
            this.convertViewDate(this.viewDate);
            // console.log(this.viewDateStringConversion);
        });
        this.chartDataArraySubscription = this.commService.chartDataArraySubject
        .subscribe((chartDataArr) => {
            this.importedChartDataArray = chartDataArr;
            // this.dataSource.data = this.convertedChartDataArray;
            console.log(this.dataSource.data);
        });
        // this.convertChartData();

        // console.log(this.convertedChartDataArray);
        // console.log(this.dataSource.data);
        // console.log('yes');
        // this.ngOnInit();
        // this.dataSource.data = this.convertedChartDataArray;
    }

    convertChartData() {
        console.log(this.foodArr);
        console.log(this.exerciseArr);
        const convertedChartData: Cals[] = new Array(0);
        let caloriesConsumed = 0;
        let caloriesBurned = 0;
        const chartData = new ChartData(
            'Calories Consumed',
            0
            );
        for (this.i = 0; this.i < this.foodArr.length; this.i++) {
            if ( (this.foodArr[this.i].date === this.viewDate.toLocaleDateString()) ) {
                caloriesConsumed += this.foodArr[this.i].calories;
            }
            // console.log(this.foodArr[this.i].calories);
        }
        chartData.value = caloriesConsumed;
        console.log(caloriesConsumed);
        convertedChartData.push(chartData);
        console.log(convertedChartData);
        const chartData2 = new ChartData(
            'Calories Burned',
            0
        );
        for (this.j = 0; this.j < this.exerciseArr.length; this.j++) {
            if ( (this.exerciseArr[this.j].date === this.viewDate.toLocaleDateString())) {
                caloriesBurned += this.exerciseArr[this.j].calories;
            }
        }
        chartData2.value = caloriesBurned;
        convertedChartData.push(chartData2);
        console.log(convertedChartData);
        this.convertedChartDataArray = convertedChartData;
        this.dataSource.data = this.convertedChartDataArray;
        // console.log(this.convertedChartDataArray);
        // return convertedChartData;
    }

    trackByFn1(index, food: Food) {
        console.log(food);
        return index; // or song.id
    }

    trackByFn2(index, exercise: Exercise) {
        console.log(exercise);
        return index; // or song.id
    }
}

