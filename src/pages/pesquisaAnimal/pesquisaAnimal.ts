import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AnimalList } from '../animalList/animalList';

@Component({
  selector: 'pesquisaAnimal',
  templateUrl: 'pesquisaAnimal.html'
})



export class PesquisaAnimal {

constructor(public navCtrl: NavController) {

  }

  goback() {
   		this.navCtrl.pop();
	}

animalList = AnimalList;
}
