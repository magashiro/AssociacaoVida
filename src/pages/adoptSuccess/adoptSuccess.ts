import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-adoptSuccess',
  templateUrl: 'adoptSuccess.html'
})
export class AdoptSuccessPage {



goback() {
	this.navCtrl.popToRoot();
}

homePage = HomePage;
  constructor(public navCtrl: NavController) {

  }

}