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
  temp = {};
  temps = [];
	goback() {
   		this.navCtrl.pop();
	}

userFormPage = UserFormPage;
homePage = HomePage;

  constructor(public navCtrl: NavController, private databaseProvider: DatabaseProvider, private platform: Platform, private storage: Storage) {
    this.databaseProvider.getDatabaseState().subscribe(rdy =>{
      if(rdy){
        this.loadAnimalData();
        this.loadAnimalDataTemp();
      }
  })
  }

  loadAnimalData(){
  	this.databaseProvider.getAllAnimals().then(data =>{
  		this.animals = data;
  	})
  }

  loadAnimalDataTemp(){
    this.databaseProvider.getAllAnimalsTemp().then(data =>{
      this.temps = data;
    })
  }

  addAnimal(){
   	this.databaseProvider.addAnimal(this.animal['tipo'], this.animal['nome'], this.animal['sexo'], this.animal['anos'], this.animal['meses'], this.animal['porte'], this.animal['temperamento'], this.animal['raca'], this.animal['vacinado'], this.animal['castrado'], this.animal['info'], this.animal['img'])
  	.then(data =>{
  		this.loadAnimalData();
  	});
  	this.animal = {};
  }

  addAnimalTemp(){
    this.databaseProvider.addAnimalTemp(this.temp['tipo'], this.temp['nome'], this.temp['sexo'], this.temp['anos'], this.temp['meses'], this.temp['porte'], this.temp['temperamento'], this.temp['raca'], this.temp['vacinado'], this.temp['castrado'], this.temp['info'], this.temp['img'])
    .then(data =>{
      this.loadAnimalDataTemp();
    });
    this.temp = {};
  }

}