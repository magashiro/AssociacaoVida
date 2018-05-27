import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AnimalFormPage } from '../animalForm/animalForm';
import { AnimalList } from '../animalList/animalList';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
animalList = AnimalList;
animalFormPage = AnimalFormPage;
  constructor(public navCtrl: NavController) {

  }
}
