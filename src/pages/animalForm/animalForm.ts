import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-animalForm',
  templateUrl: 'animalForm.html'
})
export class AnimalFormPage {
goback() {
   this.navCtrl.pop();
}
homePage = HomePage;
  constructor(public navCtrl: NavController) {

  }

}
