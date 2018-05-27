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
	}



adoptSuccessPage = AdoptSuccessPage;
adoptFormPage = AdoptFormPage;
}
