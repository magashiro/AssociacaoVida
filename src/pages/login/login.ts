import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { ContactPage } from '../contact/contact';
import { AdminProvider, Admin } from '../../providers/admin/admin';
import { AdminViewPage } from '../adminView/adminView';

@Component({
  selector: 'page-login' ,
  templateUrl: 'login.html' ,
})

export class LoginPage {
  model: Admin;
  contact = ContactPage;
  goback() {
	   this.navCtrl.pop();
	}

  constructor(public navCtrl: NavController, public navParams: NavParams, private adminProvider: AdminProvider, public toastController: ToastController){
    this.model = new Admin();
  }

  private presentToast(text) {
    let toast = this.toastController.create({
      message: text,
      duration: 3000,
      position: 'top'
    });
    toast.present();
}

  private login () {
    this.adminProvider.authenticate(this.model.login, this.model.senha).then(admin => {
      this.navCtrl.push(AdminViewPage);  
    }).catch(e => console.error(e));
  }
}