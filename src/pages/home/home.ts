import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public searchBySelector = "";
  public showDoctorText = false;
  public dateSelector = false;
  public myDate;
  constructor(public navCtrl: NavController) {

  }

  showControls() {
    if(this.searchBySelector = "Name") {
      this.showDoctorText = true;
    }
  }

  showDatePicker() {
    this.dateSelector = true;
  }

}
