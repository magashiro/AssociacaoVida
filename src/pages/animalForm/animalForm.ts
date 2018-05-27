import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { UserFormPage } from '../userForm/userForm';
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

  constructor(public navCtrl: NavController) {
    this.model = new Animal();
  }

  save(){
    this.navCtrl.push(UserFormPage, {
      nome: this.model.nome,
      tipo: this.model.tipo,
      sexo: this.model.sexo,
      anos: this.model.anos,
      meses: this.model.meses,
      porte: this.model.porte,
      temperamento: this.model.temperamento,
      raca: this.model.raca,
      vacinado: this.model.vacinado,
      castrado: this.model.castrado,
      info: this.model.info,
      img: this.model.img
    });
  }

}
