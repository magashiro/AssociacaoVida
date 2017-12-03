import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Storage } from '@ionic/storage';
import { PesquisaAnimal} from '../pesquisaAnimal/pesquisaAnimal'
@Component({
  selector: 'listaAnimais',
  templateUrl: 'listaAnimais.html'
})

export class ListaAnimais {
  HomePage = HomePage;
  pesquisaAnimal = PesquisaAnimal;
  constructor(public navCtrl: NavController) {

  }

  goback() {
   		this.navCtrl.pop();
	}
PesquisaAnimal = PesquisaAnimal;
HomePage= HomePage;
}
