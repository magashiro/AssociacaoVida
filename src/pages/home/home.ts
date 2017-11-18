import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AnimalFormPage } from '../animalForm/animalForm'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

animalFormPage = AnimalFormPage;
  constructor(public navCtrl: NavController) {

  }

}
