import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserFormPage } from '../userForm/userForm';
import { DatabaseProvider } from './../../providers/database/database';
import { Storage } from '@ionic/storage';
import { AdoptSuccessPage } from '../adoptSuccess/adoptSuccess';

@Component({
  selector: 'page-confirmAdopt',
  templateUrl: 'confirmAdopt.html'
})
export class ConfirmAdoptPage {

	goback() {
	   this.navCtrl.pop();
	}

	userFormPage = UserFormPage;
	adoptSuccessPage = AdoptSuccessPage;

	constructor(public navCtrl: NavController, private databaseProvider: DatabaseProvider, private storage: Storage) {

	}

}