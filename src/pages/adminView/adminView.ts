import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AnimalProvider, Animal } from '../../providers/animal/animal';
import { LoginPage } from '../login/login';
import { AdminViewPendingAnimalPage } from '../adminViewPendingAnimal/adminViewPendingAnimal';
import { AdotanteProvider, Adotante } from '../../providers/adotante/adotante';


@Component({
  selector: 'page-admin-view',
  templateUrl: 'adminView.html',
})
export class AdminViewPage {
  modelAdotante: Adotante;
  modelAnimal: Animal;
  animals: any[] = [];
  searchText: string = null;

  constructor(public navCtrl: NavController, private animalProvider: AnimalProvider) {
    this.modelAnimal = new Animal();
    this.modelAdotante = new Adotante();
  }

  ionViewDidLoad() {
    this.getPendingAnimals();
  }

  ionViewCanEnter() {
    this.getPendingAnimals();
  }

  getPendingAnimals(){
    this.animalProvider.getPending(this.searchText)
    .then((result: any[]) =>{
      this.animals = result;
    });
  }

  showAnimal(id: number){
  	this.navCtrl.push(AdminViewPendingAnimalPage, { 
      id: id,
    });
  }

  filterAnimals(ev: any){
  	this.getPendingAnimals();
  }

  goback() {
   		this.navCtrl.pop();
	}

}
