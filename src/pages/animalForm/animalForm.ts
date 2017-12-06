import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { UserFormPage } from '../userForm/userForm';
import { DatabaseProvider } from './../../providers/database/database';
import { AnimalProvider, Animal } from '../../providers/animal/animal';

@Component({
  selector: 'page-animalForm',
  templateUrl: 'animalForm.html'
})

export class AnimalFormPage {
  model: Animal;
  animals: any[] = [];
	goback() {
   		this.navCtrl.pop();
	}

userFormPage = UserFormPage;
homePage = HomePage;

  constructor(public navCtrl: NavController, private databaseProvider: DatabaseProvider, private animalProvider: AnimalProvider, private toast: ToastController) {
    this.model = new Animal();


  }

  private saveAnimal(){
    return this.animalProvider.insert(this.model);
  }

  save(){
    this.saveAnimal()
    .then(() =>{})
    .catch(() =>{
      this.toast.create({message: 'Erro ao salvar o animal', duration: 3000, position: 'bottom'}).present();
    });
  }

}