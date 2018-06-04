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
  check: Admin;
  model: Admin;
  contact = ContactPage;
  goback() {
	   this.navCtrl.pop();
	}

  constructor(public navCtrl: NavController, public navParams: NavParams, private adminProvider: AdminProvider, public toastController: ToastController){
    this.model = new Admin();
    // this.check = new Admin();
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
    // this.check = this.adminProvider.checkUser(this.model.login, this.model.senha);
    // this.adminProvider.checkUser(this.model.login, this.model.senha)
    // .then((result: Admin) =>{
    //   this.check = result;
    // });

    // if (this.model.senha == this.check.senha && this.model.senha != '' && this.model.senha != undefined){
      this.navCtrl.push(AdminViewPage);
    // } else {
    //   this.presentToast('Usuário e senha não conferem!');
    // }
  }
    
  }

  // private authenticate(){
  //   this.login();
  //   if (this.model.senha == this.result.senha[0] && this.model.senha != ''){
  //     this.navCtrl.push(AdminViewPage);
  //   } else {
  //     this.presentToast('O usuário e senha não conferem!');
  //   }
    

    // return this.adminProvider.checkUser(this.model.login);


    // if (this.login() != '' && this.login() != undefined){
    //   this.navCtrl.push();
    // } else {
    //   this.presentToast('O usuário e senha não conferem!');
    // }

    // this.login()
    // .then((result: Admin) => {
    //   if (this.model.senha == this.result.senha && this.model.senha != ''){
    //     this.navCtrl.push(AdminViewPage);
    //   } else {
    //     this.presentToast('O usuário e senha não conferem!');
    //   }
    // })
    // .catch(() =>{
    //   this.presentToast('Usuário não encontrado!');
    // });