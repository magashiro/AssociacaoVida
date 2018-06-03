import { Component } from '@angular/core';
import { NavController, IonicPage, NavParams, ToastController, IonicPage } from 'ionic-angular';
import { AnimalList } from '../animalList/animalList';
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
		this.model.id = navParams.get('id');
		if (this.navParams.data.id){
			this.animalProvider.get(this.navParams.data.id)
			.then((result: any) =>{
				this.model = result;
			})
		}
	}

	ionViewDidLoad(){
		this.animalProvider.getNew()
		.then((result: any[]) =>{
			this.animals = result;
		})
		.catch(() =>{
			this.toast.create({message: 'Erro ao carregar o animal', duration: 3000, position: 'bottom'}).present();
		});	
	}

	save(){
		this.navCtrl.push(AdoptFormPage, {
			id: this.model.id
		})
	}


adoptFormPage = AdoptFormPage;
animalList = AnimalList;
}
