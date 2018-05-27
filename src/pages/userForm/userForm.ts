import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { AnimalFormPage } from '../animalForm/animalForm';
import { DonateSuccessPage } from '../donateSuccess/donateSuccess';
import { AnimalProvider, Animal } from '../../providers/animal/animal';
import { DoadorProvider, Doador } from '../../providers/doador/doador';

@Component({
  selector: 'page-userForm',
  templateUrl: 'userForm.html'
})
export class UserFormPage {
	modelAnimal: Animal;
	modelDoador: Doador;

	goback() {
	   this.navCtrl.pop();
	}
	donateSuccessPage = DonateSuccessPage;
	animalFormPage = AnimalFormPage;
	  constructor(public navCtrl: NavController, private doadorProvider: DoadorProvider, private animalProvider: AnimalProvider, public navParams: NavParams, private toast: ToastController) {
	  	this.modelDoador = new Doador();
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

		this.saveDoador()
		.then(() =>{})
		.catch(() =>{
			this.toast.create({message: 'Erro ao salvar o doador', duration: 3000, position: 'bottom'}).present();
		});

		this.linkAnimalDoador()
		.then(() =>{})
		.catch(() =>{
			this.toast.create({message: 'Erro ao linkar o doador', duration: 3000, position: 'bottom'}).present();
		});
	};

	private saveDoador(){
		return this.doadorProvider.insertDoador(this.modelDoador);
	}

	private saveAnimal(){
		return this.animalProvider.insertAnimal(this.modelAnimal);
	}

	private linkAnimalDoador(){
		return this.animalProvider.updateIdDoador(this.modelDoador.cpf);
	}


}
