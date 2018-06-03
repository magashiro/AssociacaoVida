import { Component } from '@angular/core';
import { NavController, ToastController, NavParams } from 'ionic-angular';
import { AdoptFormPage } from '../adoptForm/adoptForm';
import { AdoptSuccessPage } from '../adoptSuccess/adoptSuccess';
import { DatabaseProvider } from './../../providers/database/database';
import { AdotanteProvider, Adotante } from '../../providers/adotante/adotante';
import { AnimalProvider, Animal } from '../../providers/animal/animal';

@Component({
  selector: 'page-question',
  templateUrl: 'question.html'
})
export class QuestionPage {
	modelAnimal: Animal;
	modelAdotante: Adotante;
	questions: any[] = [];

	goback() {
	   this.navCtrl.pop();
	}

	constructor(public navCtrl: NavController, private toast: ToastController, public navParams: NavParams, private adotanteProvider: AdotanteProvider, private animalProvider: AnimalProvider) {
		this.modelAnimal = new Animal();
		this.modelAdotante = new Adotante();
	  	this.modelAdotante.nome = navParams.get('nome');
	  	this.modelAdotante.endereco = navParams.get('endereco');
	  	this.modelAdotante.bairro = navParams.get('bairro');
	  	this.modelAdotante.cidade = navParams.get('cidade');
	  	this.modelAdotante.telefone = navParams.get('telefone');
	  	this.modelAdotante.email = navParams.get('email');
	  	this.modelAdotante.rg = navParams.get('rg');
	  	this.modelAdotante.cpf = navParams.get('cpf');
	  	this.modelAnimal.id = navParams.get('id');
	}

	private insertAdotante(){
		return this.adotanteProvider.insertAdotante(this.modelAdotante);
	}

	private updateIdAdotante(){
		return this.animalProvider.updateIdAdotante(this.modelAdotante.cpf, this.modelAnimal.id);
	}

	save(){
		if(this.validateFields()){
		this.insertAdotante()
	    .then(() =>{})
	    .catch(() =>{
	    	this.toast.create({message: 'Erro ao atualizar as perguntas', duration: 3000, position: 'bottom'}).present();
    	});
    	this.updateIdAdotante()
	    .then(() =>{})
	    .catch(() =>{
	    	this.toast.create({message: 'Erro ao linkar o adotante', duration: 3000, position: 'bottom'}).present();
    	});
    	this.navCtrl.push(AdoptSuccessPage);
		}

	}

  validateFields(){
    if(
      this.ruleValidateFields(this.modelAdotante.q1,null,0) &&
      this.ruleValidateFields(this.modelAdotante.q2,null,0) &&
      this.ruleValidateFields(this.modelAdotante.q3,null,0) &&
      this.ruleValidateFields(this.modelAdotante.q4,null,0) &&
      this.ruleValidateFields(this.modelAdotante.q5,null,0) &&
      this.ruleValidateFields(this.modelAdotante.q6,null,0) &&
      this.ruleValidateFields(this.modelAdotante.q7,null,0) &&
      this.ruleValidateFields(this.modelAdotante.q8,null,0)){
      return true;
    } else {
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



adoptSuccessPage = AdoptSuccessPage;
adoptFormPage = AdoptFormPage;
}
