import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public searchBySelector = "";
  public showTextInput = false;
  public showDateSelector = false;
  public showHospitalList = false;
  public showDoctorList = false;
  public showSpecialtyList = false;
  public showApptButton = false;
  public myDate;
  public minDate = new Date();
  public maxDate = new Date(this.minDate.getFullYear() + 1, 11);

  constructor(public navCtrl: NavController) {

  }

  showControls() {
    if(this.searchBySelector === "Name") {
      this.showTextInput = true;
      this.showDoctorList = true;
      this.showDateSelector = false;
      this.showHospitalList = false;
      this.showSpecialtyList = false;
      this.showApptButton = false;
    }
    else if (this.searchBySelector === "Specialty") {
      this.showTextInput = true;
      this.showSpecialtyList = true;
      this.showDateSelector = false;
      this.showHospitalList = false;
      this.showDoctorList = false;
      this.showApptButton = false;
    }
    else if (this.searchBySelector === "Hospital") {
      this.showHospitalList = true;
      this.showTextInput = true;
      this.showDateSelector = false;
      this.showDoctorList = false;
      this.showSpecialtyList = false;
      this.showApptButton = false;
    }
  }

  showDatePicker() {
    this.showDateSelector = true;
  }

  showHospitalDoctorList() {
    this.showDoctorList = true;
  }

  showHospitalSpecialtyList() {
    this.showSpecialtyList = true;
  }

  showButton() {
    this.showApptButton = true;
  }

}
