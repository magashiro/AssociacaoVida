import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { QuestionPage } from '../question/question';
import { DatabaseProvider } from './../../providers/database/database';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-adoptForm',
  templateUrl: 'adoptForm.html'
})
export class AdoptFormPage {

	goback() {
	   this.navCtrl.pop();
	}
	
	  constructor(public navCtrl: NavController, private databaseProvider: DatabaseProvider, private storage: Storage) {

	  }
questionPage = QuestionPage;

}
