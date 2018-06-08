import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { AnimalFormPage } from '../animalForm/animalForm';
import { DonateSuccessPage } from '../donateSuccess/donateSuccess';
import { AnimalProvider, Animal } from '../../providers/animal/animal';

@Component({
  selector: 'page-userForm',
  templateUrl: 'userForm.html'
})
export class UserFormPage {
	modelAnimal: Animal;

	goback() {
	   this.navCtrl.pop();
	}
	donateSuccessPage = DonateSuccessPage;
	animalFormPage = AnimalFormPage;
	  constructor(public navCtrl: NavController, private animalProvider: AnimalProvider, public navParams: NavParams, private toastController: ToastController) {
	  	this.modelAnimal = new Animal();
	  	this.modelAnimal.nome = navParams.get('nome');
	  	this.modelAnimal.tipo = navParams.get('tipo');
	  	this.modelAnimal.sexo = navParams.get('sexo');
	  	this.modelAnimal.anos = navParams.get('anos');
	  	this.modelAnimal.meses = navParams.get('meses');
	  	this.modelAnimal.porte = navParams.get('porte');
	  	this.modelAnimal.temperamento = navParams.get('temperamento');
	  	this.modelAnimal.raca = navParams.get('raca');
	  	this.modelAnimal.vacinado = navParams.get('vacinado');
	  	this.modelAnimal.castrado = navParams.get('castrado');
	  	this.modelAnimal.info = navParams.get('info');
	  	this.modelAnimal.img = navParams.get('img');
	  }

  private presentToast(text) {
    let toast = this.toastController.create({
      message: text,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }

	save(){
		if(this.validateFields()){
			this.saveAnimal()
			.then(() =>{})
			.catch(() =>{
				
			});
			this.navCtrl.push(DonateSuccessPage);
		} else {
			this.presentToast('Favor preencher todos os campos!');
		}
	};


	private saveAnimal(){
		if (this.modelAnimal.info == '' || this.modelAnimal.info == null || this.modelAnimal.info == undefined){
      		this.modelAnimal.info = 'Sem informação adicional';
      	}
		return this.animalProvider.insertAnimal(this.modelAnimal);
	}

  validateFields(){
    if(
      this.ruleValidateFields(this.modelAnimal.nomeDoador,null,3) &&
      this.ruleValidateFields(this.modelAnimal.cidadeDoador,null,0) &&
      this.ruleValidateFields(this.modelAnimal.telefoneDoador,null,3) &&
      this.ruleValidateFields(this.modelAnimal.emailDoador,null,1)){
      return true;
    } else {
    	this.presentToast('Preencha todos os campos!');
      return false;
    }
  }

  ruleValidateFields(field,type,minChar){
    if(field != '' && field != undefined && field.length >= minChar){
      return true;
    }else{
      return false;
    }
  }
}