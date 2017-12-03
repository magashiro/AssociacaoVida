import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { ListaAnimais } from '../listaAnimais/listaAnimais';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'pesquisaAnimal',
  templateUrl: 'pesquisaAnimal.html'
})

export class PesquisaAnimal {

  goback() {
   		this.navCtrl.pop();
	}

ListaAnimais = ListaAnimais;
}
