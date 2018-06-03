import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { ContactPage } from '../contact/contact';
import { AdminProvider, Admin } from '../../providers/admin/admin';

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
    return this.adminProvider.checkUser(this.model.login, this.model.senha);
  }

  private authenticate(){
    this.login()
    .then((result: Admin) => {
      if (this.model.senha==result.senha && this.model.senha != ''){
        this.navCtrl.push(LoginPage);
      } else {
        this.presentToast('O usuário e senha não conferem!');
      }
    })
    .catch(() =>{
      this.presentToast('Usuário não encontrado!');
    })
  }
  
  };
    // if (this.login() != '' && this.login() != undefined){
    //   this.navCtrl.push();
    // } else {
    //   this.presentToast('O usuário e senha não conferem!');
    // }