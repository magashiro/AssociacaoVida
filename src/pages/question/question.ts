import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AdoptFormPage } from '../adoptForm/adoptForm';
import { AdoptSuccessPage } from '../adoptSuccess/adoptSuccess';
import { DatabaseProvider } from './../../providers/database/database';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-question',
  templateUrl: 'question.html'
})
export class QuestionPage {

	goback() {
	   this.navCtrl.pop();
	}

	  constructor(public navCtrl: NavController, private databaseProvider: DatabaseProvider, private storage: Storage) {

	  }

adoptSuccessPage = AdoptSuccessPage;
adoptFormPage = AdoptFormPage;
}
