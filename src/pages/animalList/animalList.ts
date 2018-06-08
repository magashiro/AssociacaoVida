import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AnimalProvider } from '../../providers/animal/animal';


@Component({
  selector: 'page-animalList',
  templateUrl: 'animalList.html'
})

export class AnimalList {
  animals: any[] = [];
  searchText: string = null;


  homePage = HomePage;

  constructor(public navCtrl: NavController, private animalProvider: AnimalProvider) {
  }

  ionViewDidEnter(){
  	this.getNewAnimals();
  }

  getNewAnimals(){
    this.animalProvider.getBySex(this.searchText)
    .then((result: any[]) =>{
      this.animals = result;
    });
  }

  showAnimal(id: number){
  	this.navCtrl.push('AnimalShow', { 
      id: id
    });
  }

  getAllAnimals(){
  	this.animalProvider.getAll(this.searchText)
  	.then((result: any[]) =>{
  		this.animals = result;
  	});
  }

  filterAnimals(){
  	this.getNewAnimals();
  }

  goback() {
   		this.navCtrl.pop();
	}

}
