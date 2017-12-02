import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AdoptSuccessPage } from '../adoptSuccess/adoptSuccess';
import { AnimalFormPage } from '../animalForm/animalForm';
import { DatabaseProvider } from './../../providers/database/database';
import { UserFormPage } from '../userForm/userForm';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-confirmAdopt',
  templateUrl: 'confirmAdopt.html'
})
export class ConfirmAdoptPage {

	goback() {
	   this.navCtrl.pop();
	}

	animalFormPage = AnimalFormPage;
	userFormPage = UserFormPage;
	adoptSuccessPage = AdoptSuccessPage;

	constructor(public navCtrl: NavController, private databaseProvider: DatabaseProvider, private storage: Storage) {

	}

}