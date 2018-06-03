import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { QuestionPage } from '../question/question';
import { AdotanteProvider, Adotante } from '../../providers/adotante/adotante';
import { AnimalProvider, Animal } from '../../providers/animal/animal';

@Component({
  selector: 'page-adoptForm',
  templateUrl: 'adoptForm.html'
})
export class AdoptFormPage {
  modelAdotante: Adotante;
  modelAnimal: Animal;
  adotantes: any[] = [];
	goback() {
	   this.navCtrl.pop();
	}
	
  constructor(public navCtrl: NavController, public navParams: NavParams, private adotanteProvider: AdotanteProvider, private animalProvider: AnimalProvider) {
  	this.modelAdotante = new Adotante();
    this.modelAnimal = new Animal();
    this.modelAnimal.id = navParams.get('id');
  }

  save(){
    this.navCtrl.push(QuestionPage, {
      nome: this.modelAdotante.nome,
      endereco: this.modelAdotante.endereco,
      bairro: this.modelAdotante.bairro,
      cidade: this.modelAdotante.cidade,
      telefone: this.modelAdotante.telefone,
      email: this.modelAdotante.email,
      rg: this.modelAdotante.rg,
      cpf: this.modelAdotante.cpf,
      id: this.modelAnimal.id
    });
  }

questionPage = QuestionPage;

}