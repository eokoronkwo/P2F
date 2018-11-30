import { Component, OnInit } from '@angular/core';
import { MedicalId } from 'src/app/classes/medical-id';
@Component({
  selector: 'app-add-medical-id',
  templateUrl: './add-medical-id.component.html',
  styleUrls: ['./add-medical-id.component.css']
})
export class AddMedicalIdComponent implements OnInit {
  inputblood: string;
  inputheightf: number;
  inputheighti: number;
  inputdonor: boolean;
  inputweight: number;
  medicalid = new MedicalId (
    0,
    '',
    false,
    0,
    0,
    0
  );
  invalidInput: boolean;
  constructor() { }
  options: string[] = [
    'yes',
    'no'
  ]
  ;
  ngOnInit() {
  }
  submit() {
    this.invalidInput = false;
    if (this.inputheighti > 11 || this.inputweight === undefined) {
      this.invalidInput = true;
    } else {
      this.medicalid.bloodType = this.inputblood;
      this.medicalid.organDonor = this.inputdonor;
      this.medicalid.heightFt = this.inputheightf;
      this.medicalid.heightIn = this.inputheighti;
      this.medicalid.weight = this.inputweight;
      console.log(this.medicalid);
    }
  }
}
