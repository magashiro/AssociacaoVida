import { Component } from '@angular/core';
import { NavController, Platform, ToastController } from 'ionic-angular';
import { ListaAnimais } from '../listaAnimais/listaAnimais';
import { Storage } from '@ionic/storage';
import { AnimalProvider, Animal } from '../../providers/animal/animal';

@Component({
  selector: 'pesquisaAnimal',
  templateUrl: 'pesquisaAnimal.html'
})



export class PesquisaAnimal {

constructor(public navCtrl: NavController, private toast: ToastController, private animalProvider: AnimalProvider) {

  }

  goback() {
   		this.navCtrl.pop();
	}

listaAnimais = ListaAnimais;
}
