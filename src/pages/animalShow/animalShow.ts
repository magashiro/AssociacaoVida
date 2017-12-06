import { Component } from '@angular/core';
import { NavController, IonicPage, NavParams, ToastController, IonicPage } from 'ionic-angular';
import { ListaAnimais } from '../listaAnimais/listaAnimais';
import { Storage } from '@ionic/storage';
import { AnimalProvider, Animal } from '../../providers/animal/animal';
import { AdoptFormPage } from '../adoptForm/adoptForm';

@IonicPage()
@Component({
  selector: 'page-animalShow',
  templateUrl: 'animalShow.html'
})

export class AnimalShow {
	model: Animal;
  	animals: any[];

  	goback() {
   		this.navCtrl.pop();
	}

	constructor(public navCtrl: NavController, public navParams: NavParams, private animalProvider: AnimalProvider, private toast: ToastController) {

		this.model = new Animal();
		
		if (this.navParams.data.id){
			this.animalProvider.get(this.navParams.data.id)
			.then((result: any) =>{
				this.model = result;
			})
		}

	}

	ionViewDidLoad(){
		this.animalProvider.getAll()
		.then((result: any[]) =>{
			this.animals = result;
		})
		.catch(() =>{
			this.toast.create({message: 'Erro ao carregar o animal', duration: 3000, position: 'bottom'}).present();
		});
		
	}
adoptFormPage = AdoptFormPage;
listaAnimais = ListaAnimais;
}
