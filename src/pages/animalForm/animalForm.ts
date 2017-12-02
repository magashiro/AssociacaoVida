import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { HomePage } from '../home/home';
import { UserFormPage } from '../userForm/userForm';
import { DatabaseProvider } from './../../providers/database/database';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-animalForm',
  templateUrl: 'animalForm.html'
})

export class AnimalFormPage {
  animal = {};
  animals = [];
	goback() {
   		this.navCtrl.pop();
	}

userFormPage = UserFormPage;
homePage = HomePage;

  constructor(public navCtrl: NavController, private databaseProvider: DatabaseProvider, private platform: Platform, private storage: Storage) {
    this.databaseProvider.getDatabaseState().subscribe(rdy =>{
      if(rdy){
        this.loadAnimalData();
      }
  })
  }

  loadAnimalData(){
  	this.databaseProvider.getAllAnimals().then(data =>{
  		this.animals = data;
  	})
  }

  addAnimal(){
   	this.databaseProvider.addAnimal(this.animal['tipo'], this.animal['nome'], this.animal['sexo'], this.animal['anos'], this.animal['meses'], this.animal['porte'], this.animal['temperamento'], this.animal['raca'], this.animal['vacinado'], this.animal['castrado'], this.animal['info'], this.animal['img'])
  	.then(data =>{
  		this.loadAnimalData();
  	});
  	this.animal = {};
  }

}