import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-donateSuccess',
  templateUrl: 'donateSuccess.html'
})
export class DonateSuccessPage {



goback() {
	this.navCtrl.popToRoot();
}

homePage = HomePage;
  constructor(public navCtrl: NavController) {

  }

}