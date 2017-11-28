import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AnimalFormPage } from '../animalForm/animalForm';

@Component({
  selector: 'page-userForm',
  templateUrl: 'userForm.html'
})
export class UserFormPage {
goback() {
   this.navCtrl.pop();
}
animalFormPage = AnimalFormPage;
  constructor(public navCtrl: NavController) {

  }

}
