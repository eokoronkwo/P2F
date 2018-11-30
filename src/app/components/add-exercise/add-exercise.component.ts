import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { empty } from '@typed/hashmap';
import { CommunicationService } from 'src/app/services/communication.service';
import { ExerciseService } from 'src/app/services/exercise.service';
import { UserService } from 'src/app/services/user.service';
import { LogExercise } from 'src/app/classes/log-exercise';
import { Exercise } from 'src/app/classes/exercise';

@Component({
  selector: 'app-add-exercise',
  templateUrl: './add-exercise.component.html',
  styleUrls: ['./add-exercise.component.css']
})
export class AddExerciseComponent implements OnInit {

  // add 'missing input' arrow boolean later after form is formatted
  mapple: Map<string, number>;
  logExercise: LogExercise;
  map = empty<string, number>();
  exerciseForm: FormGroup;
  exercise: string;
  duration1 = new FormControl();
  hello: number[] = [1, 2, 3, 4, 5, 6, 7];
  weight: number;
  newWeight: number;
  duration: number;
  met: number;
  date: string;
  caloriesBurned: number;
  exerciseItem = new Exercise(
    0,
    '',
    '',
    0,
    this.commService.getCurrentUser().id
  );
  invalidInput = false;
  exerciseItemArray: Exercise[] = new Array(0);
  exercises: string[] = [
    'Bicycling: mountain, uphill, vigorous',
    'Bicycling: mountain, competitive, racing',
    'Bicycling: mountain, general',
    'Bicycling: to/from work, self selected pace',
    'Bicycling: general',
    'Unicycling',
    'Army type obstacle course exercise/Boot camp training program',
    'Bicycling: Stationary/RPM/Spin bike class',
    'Calisthenics: (e.g., push ups, sit ups, pull-ups, jumping jacks), vigorous effort',
    'Calisthenics: (e.g., push ups, sit ups, pull-ups, lunges), moderate effort',
    'Calisthenics: light or moderate effort, general (example: back exercises), going up & down from floor',
    'Circuit training: including kettlebells, some aerobic movement with minimal rest, general, vigorous intensity',
    'Resistance training: (weight lifting - free weight, nautilus or universal-type), power lifting or body building, vigorous effort',
    'Resistance (weight) training, squats , slow or explosive effort',
    'Stair-treadmill ergometer, general',
    'Rope skipping, general',
    'Pilates, general',
    'Video exercise workouts: TV conditioning programs (e.g., yoga, stretching), light effort',
    'Video exercise workouts: TV conditioning programs (e.g., cardio-resistance), moderate effort',
    'Video exercise workouts: TV conditioning programs (e.g., cardio-resistance), vigorous effort',
    'Jog/walk combination (jogging component of less than 10 minutes)',
    'Jogging: general',
    'Jogging: in place',
    'Running: 4 mph (15 min/mile)',
    'Running: 5 mph (12 min/mile)',
    'Running: 6 mph (10 min/mile)',
    'Running: 7 mph (8.5 min/mile)',
    'Running: 8 mph (7.5 min/mile)',
    'Running: 9 mph (6.5 min/mile)',
    'Running: 10 mph (6 min/mile)',
    'Running: 11 mph (5.5 min/mile)',
    'Running: 12 mph (5 min/mile)',
    'Running: 13 mph (4.6 min/mile)',
    'Running: 14 mph (4.3 min/mile)',
    'Running: cross country',
    'Running: stairs, up',
    'Running: training, pushing a wheelchair or baby carrier',
    'Running: marathon',
    'Basketball: game',
    'Basketball: non-game, general',
    'Basketball: drills, practice',
    'Boxing: in ring, general',
    'Boxing: punching bag',
    'Cheerleading: gymnastic moves, competitive',
    'Coaching: football, soccer, basketball, baseball, swimming, etc',
    'Cricket/batting/bowling/ielding',
    'Fencing',
    'Drag racing, pushing or driving a car',
    'Football: competitive',
    'Football: touch, flag, general',
    'Football: touch, flag, light effort',
    'Football or baseball, playing catch',
    'Frisbee: ultimate',
    'Frisbee: playing, general',
    'Gymnastics, general',
    'Handball, general',
    'Hockey: ice, general',
    'Martial arts, different types, moderate pace',
    'Lacrosse',
    'Racquetball: competitive',
    'Racquetball: general',
    'Rock or mountain climbing',
    'Rugby, union, team, competitive',
    'Soccer: competitive',
    'Soccer: casual, general',
    'Tennis: general',
    'Volleyball',
    'Track and field: (e.g., shot, discus, hammer throw',
    'Track and field: (e.g., high jump, long jump, triple jump, javelin, javelin, pole vault)',
    'Track and field: (e.g., steeplechase, hurdles)'
  ];

  config = {
    displayKey: 'description', // if objects array passed which key to be displayed defaults to description
    search: true, // true/false for the search functionlity defaults to false,
    height: 'auto', // height of the list so that if there are more no o
    // f items it can show a scroll defaults to auto. With auto height scroll will never appear
    placeholder: 'Select Exercise', // text to be displayed when no item is selected defaults to Select,
    customComparator: () => { }, // a custom function using which user
    // wants to sort the items. default is undefined and Array.sort() will be used in that case,
    limitTo: 11, // a number thats limits the no of options displayed in the UI similar to angular's limitTo pipe
    moreText: 'more', // text to be displayed whenmore than one items are selected like Option 1 + 5 more
    noResultsFound: 'No results found!', // text to be displayed when no items are found while searching
    searchPlaceholder: 'Search Exercises' // label thats displayed in search input
  };

  @Input() exerciseId: number;

  constructor(
    private exerciseService: ExerciseService,
    private userService: UserService,
    private commService: CommunicationService,
  ) {
  }

  calculateCalories(weight: number, met: number, duration: number) {
    this.newWeight = weight / 2.2;
    this.met = this.mapple.get(this.exercise[0]);
    this.caloriesBurned = (this.met * this.newWeight) / (60 / duration);
    console.log(this.newWeight);
    console.log(this.met);
    console.log(this.duration);
    console.log(this.caloriesBurned);
  }

  ngOnInit() {
    // this.exercise = new FormControl();
    this.duration1 = new FormControl();
    this.exerciseForm = new FormGroup({
      weight: new FormControl(),
      exercise: new FormControl(),
      duration: new FormControl(),
      caloriesBurned: new FormControl()
    });
    this.mapple = new Map();
    this.mapple.set('Bicycling: mountain, uphill, vigorous', 14);
    this.mapple.set('Bicycling: mountain, competitive, racing', 16);
    this.mapple.set('Bicycling: mountain, general', 8.5);
    this.mapple.set('Bicycling: to/from work, self selected pace', 6.8);
    this.mapple.set('Bicycling: general', 7.5);
    this.mapple.set('Unicycling', 5);
    this.mapple.set('Army type obstacle course exercise/Boot camp training program', 5);
    this.mapple.set('Bicycling: Stationary/RPM/Spin bike class', 8.5);
    this.mapple.set('Calisthenics: (e.g., push ups, sit ups, pull-ups, jumping jacks), vigorous effort', 8);
    this.mapple.set('Calisthenics: (e.g., push ups, sit ups, pull-ups, lunges), moderate effort', 3.8);
    this.mapple.set('Calisthenics: (e.g., situps, abdominal crunches), light effort', 2.8);
    this.mapple.set('Calisthenics: light or moderate effort, general (example: back exercises), going up & down from floor', 3.5);
    this.mapple.set('Circuit training: including kettlebells, some aerobic movement with minimal rest, general, vigorous intensity', 8);
    this.mapple.set
    ('Resistance training: (weight lifting - free weight, nautilus or universal-type), power lifting or body building, vigorous effort', 6);
    this.mapple.set('Resistance (weight) training, squats , slow or explosive effort', 5);
    this.mapple.set('Stair-treadmill ergometer, general', 9);
    this.mapple.set('Rope skipping, general', 11);
    this.mapple.set('Pilates, general', 3);
    this.mapple.set('Video exercise workouts: TV conditioning programs (e.g., yoga, stretching), light effort', 2.3);
    this.mapple.set('Video exercise workouts: TV conditioning programs (e.g., cardio-resistance), moderate effort', 4);
    this.mapple.set('Video exercise workouts: TV conditioning programs (e.g., cardio-resistance), vigorous effort', 6.0);
    // Running
    this.mapple.set('Jog/walk combination (jogging component of less than 10 minutes)', 6);
    this.mapple.set('Jogging: general', 7);
    this.mapple.set('Jogging: in place', 8);
    this.mapple.set('Running: 4 mph (15 min/mile)', 6);
    this.mapple.set('Running: 5 mph (12 min/mile)', 8.3);
    this.mapple.set('Running: 6 mph (10 min/mile)', 9.8);
    this.mapple.set('Running: 7 mph (8.5 min/mile)', 11);
    this.mapple.set('Running: 8 mph (7.5 min/mile)', 11.8);
    this.mapple.set('Running: 9 mph (6.5 min/mile)', 12.8);
    this.mapple.set('Running: 10 mph (6 min/mile)', 14.5);
    this.mapple.set('Running: 11 mph (5.5 min/mile)', 16);
    this.mapple.set('Running: 12 mph (5 min/mile)', 19);
    this.mapple.set('Running: 13 mph (4.6 min/mile)', 19.8);
    this.mapple.set('Running: 14 mph (4.3 min/mile)', 23);
    this.mapple.set('Running: cross country', 9);
    this.mapple.set('Running: stairs, up', 15);
    this.mapple.set('Running: training, pushing a wheelchair or baby carrier', 8);
    this.mapple.set('Running: marathon', 13);
    this.mapple.set('Basketball: game', 8);
    this.mapple.set('Basketball: non-game, general', 6.0);
    this.mapple.set('Basketball: drills, practice', 9.3);
    this.mapple.set('Boxing: in ring, general', 12.8);
    this.mapple.set('Boxing: punching bag', 5.5);
    this.mapple.set('Cheerleading: gymnastic moves, competitive', 6);
    this.mapple.set('Coaching: football, soccer, basketball, baseball, swimming, etc', 4);
    this.mapple.set('Cricket/batting/bowling/ielding', 4.8);
    this.mapple.set('Fencing', 6);
    this.mapple.set('Drag racing, pushing or driving a car', 6);
    this.mapple.set('Football: competitive', 8);
    this.mapple.set('Football: touch, flag, general', 8);
    this.mapple.set('Football: touch, flag, light effort', 4);
    this.mapple.set('Football or baseball, playing catch', 2.5);
    this.mapple.set('Frisbee: ultimate', 8);
    this.mapple.set('Frisbee: playing, general', 3);
    this.mapple.set('Gymnastics, general', 3.8);
    this.mapple.set('Handball, general', 12);
    this.mapple.set('Hockey: ice, general', 8);
    this.mapple.set('Martial arts, different types, moderate pace', 10.3);
    this.mapple.set('Lacrosse', 8);
    this.mapple.set('Racquetball: competitive', 10);
    this.mapple.set('Racquetball: general', 7);
    this.mapple.set('Rock or mountain climbing', 8);
    this.mapple.set('Rugby, union, team, competitive', 8.3);
    this.mapple.set('Soccer: competitive', 10);
    this.mapple.set('Soccer: casual, general', 7);
    this.mapple.set('Tennis: general', 7.3);
    this.mapple.set('Volleyball', 4);
    this.mapple.set('Track and field:  (e.g., shot, discus, hammer throw', 4);
    this.mapple.set('Track and field: (e.g., high jump, long jump, triple jump, javelin, pole vault)', 6.0);
    this.mapple.set('Track and field: (e.g., steeplechase, hurdles)', 10.0);
  }

  addExerciseItem() {
    this.invalidInput = false;
    const newExerciseItem = new Exercise (
      0,
      this.exercise[0],
      (this.date.substr(5, 4) + '-' + this.date.substring(0, 4)),
      this.caloriesBurned,
      this.commService.getCurrentUser().id
    );
    if ( (this.exercise[0] === undefined)
    || (this.caloriesBurned === undefined)
    || (this.date === undefined) ) {
      this.invalidInput = true;
    } else {
      this.exerciseItemArray.push(newExerciseItem);
    }
    console.log(newExerciseItem);
    console.log(this.exerciseItemArray);
  }

  removeExerciseItem() {
    this.exerciseItemArray.pop();
    console.log(this.exerciseItemArray);
  }

  onSubmit() {
    console.log(this.exerciseItemArray);
    this.exerciseService.logExercise(this.exerciseItemArray);
  }

}

