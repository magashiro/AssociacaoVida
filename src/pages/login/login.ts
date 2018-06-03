import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ContactPage } from '../contact/contact';

@Component({
  selector: 'page-login' ,
  templateUrl: 'login.html' ,
})

export class LoginPage {
  contact = ContactPage;
  goback() {
	   this.navCtrl.pop();
	}

  private credential: Credential ={
    email:'',
    password:''
  };

  constructor(public navCtrl: NavController, public navParams: NavParams){

  }
  login () {
    console.log('Logging...')
  }
  };
