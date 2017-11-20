import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AnimalFormPage } from '../animalForm/animalForm';

@Component({
  selector: 'page-animalData',
  templateUrl: 'animalData.html'
})
export class AnimalDataPage {
goback() {
   this.navCtrl.pop();
}
animalFormPage = AnimalFormPage;
  constructor(public navCtrl: NavController) {

  }

}
