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
	modelAdotante: Adotante;
	modelAnimal: Animal;
  	animals: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private adotanteProvider: AdotanteProvider, private animalProvider: AnimalProvider, private toastController: ToastController) {
	this.modelAnimal = new Animal();
	this.modelAdotante = new Adotante();
	this.modelAnimal.id = navParams.get('id');
	if (this.navParams.data.id){
		this.animalProvider.get(this.navParams.data.id)
		.then((result: any) =>{
			this.modelAnimal = result;
			this.modelAnimal.id_adotante = result.id_adotante;
		});
		this.adotanteProvider.getAdotante(this.modelAnimal.id_adotante)
		.then((res: any) =>{
			this.modelAdotante = res;
		});
	}
	// if (this.navParams.data.id_adotante){
	// 	this.adotanteProvider.getAdotante(this.navParams.data.id_adotante)
	// 	.then((res: any) =>{
	// 		this.modelAdotante = res;
	// 	});
	// }
  }

  private presentToast(text) {
    let toast = this.toastController.create({
      message: text,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }

  	private getAdopter(){
  		this.adotanteProvider.getAdotante(this.modelAnimal.id_adotante)
  		.then((result: any) =>{
  			this.modelAdotante = result;
  		});
  	}

	goback() {
		this.navCtrl.pop();
	}

	accept(){
		this.animalProvider.acceptAdopt(this.modelAnimal.id);
		this.presentToast('Animal adotado com sucesso!');
		return this.navCtrl.pop();
	}

	reject(){
		this.animalProvider.rejectAdopt(this.modelAnimal.id);
		this.presentToast('Pedido de adoção rejeitado!');
		return this.navCtrl.pop();
	}



}
