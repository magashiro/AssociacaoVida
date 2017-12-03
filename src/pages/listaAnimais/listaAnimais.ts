import { Component } from '@angular/core';
import { NavController, Platform, ToastController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Storage } from '@ionic/storage';
import { PesquisaAnimal } from '../pesquisaAnimal/pesquisaAnimal'
import { AnimalProvider, Animal } from '../../providers/animal/animal';


@Component({
  selector: 'page-listaAnimais',
  templateUrl: 'listaAnimais.html'
})

export class ListaAnimais {
  animals: any[] = [];
  onlyNonAdopted: string = null;
  searchText: string = null;


  homePage = HomePage;
  pesquisaAnimal = PesquisaAnimal;

  constructor(public navCtrl: NavController, private toast: ToastController, private animalProvider: AnimalProvider) {
  }

  ionViewDidEnter(){
  	this.getAllAnimals();
  }

  showAnimal(id: number){
  	this.navCtrl.push('AnimalShow', { id: id});
  }

  getAllAnimals(){
  	this.animalProvider.getAll(this.searchText)
  	.then((result: any[]) =>{
  		this.animals = result;
  	});
  }

  filterAnimals(ev: any){
  	this.getAllAnimals();
  }

  goback() {
   		this.navCtrl.pop();
	}

}
