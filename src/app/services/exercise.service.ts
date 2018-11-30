import { Injectable } from '@angular/core';
import { Exercise } from '../classes/exercise';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../classes/user';
import { CommunicationService } from './communication.service';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  constructor(private httpClient: HttpClient,
    private commService: CommunicationService) { }

  controlHeaders = new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
  });
  cHeaders = {headers: this.controlHeaders };

  logExercise(exerciseArr: Exercise[]) {
    const url = 'http://localhost:8080/exercise';
    this.httpClient.post(url, exerciseArr);
  }

  getExercises(user: User) {
    const url = 'http://localhost:8080/exercise/calendar';
    this.httpClient.post<Exercise[]>(url, user, this.cHeaders).subscribe( (exerciseArr) => {
      this.commService.setCurrentExerciseArray(exerciseArr);
      console.log(exerciseArr);
    });
  }

  deleteExercise(exercise: Exercise) {
    const url = 'http://localhost:8080/exercise';
    this.httpClient.put<Exercise>(url, exercise);
  }
}
