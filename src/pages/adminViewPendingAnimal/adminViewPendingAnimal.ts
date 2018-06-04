import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AnimalProvider, Animal } from '../../providers/animal/animal';
import { AdoptFormPage } from '../adoptForm/adoptForm';
import { AdotanteProvider, Adotante } from '../../providers/adotante/adotante';


@Component({
  selector: 'page-admin-view-pending-animal',
  templateUrl: 'adminViewPendingAnimal.html',
})
export class AdminViewPendingAnimalPage {
	model: Animal;
  	animals: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private animalProvider: AnimalProvider, private toastController: ToastController) {
	this.model = new Animal();
	this.model.id = navParams.get('id');
	if (this.navParams.data.id){
		this.animalProvider.get(this.navParams.data.id)
		.then((result: any) =>{
			this.model = result;
		})
	}
  }

  private presentToast(text) {
    let toast = this.toastController.create({
      message: text,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }

	goback() {
		this.navCtrl.pop();
	}

	accept(){
		this.animalProvider.acceptAdopt(this.model.id);
		this.presentToast('Animal adotado com sucesso!');
		return this.navCtrl.pop();
	}

	reject(){
		this.animalProvider.rejectAdopt(this.model.id);
		this.presentToast('Pedido de adoção rejeitado!');
		return this.navCtrl.pop();
	}



}
