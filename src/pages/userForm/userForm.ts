import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AnimalFormPage } from '../animalForm/animalForm';
import { DonateSuccessPage } from '../donateSuccess/donateSuccess';
import { DatabaseProvider } from './../../providers/database/database';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-userForm',
  templateUrl: 'userForm.html'
})
export class UserFormPage {

	goback() {
	   this.navCtrl.pop();
	}
	donateSuccessPage = DonateSuccessPage;
	animalFormPage = AnimalFormPage;
	  constructor(public navCtrl: NavController, private databaseProvider: DatabaseProvider, private storage: Storage) {

	  }


}
