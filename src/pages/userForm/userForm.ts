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
	  constructor(public navCtrl: NavController, private animalProvider: AnimalProvider, public navParams: NavParams, private toast: ToastController) {
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

	save(){
		this.saveAnimal()
		.then(() =>{})
		.catch(() =>{
			this.toast.create({message: 'Erro ao salvar o animal', duration: 3000, position: 'bottom'}).present();
		});
	};


	private saveAnimal(){
		return this.animalProvider.insertAnimal(this.modelAnimal);
	}
}