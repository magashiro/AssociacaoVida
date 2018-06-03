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
    if(this.validateFields()){
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
  }

  validateFields(){
    if(
      this.ruleValidateFields(this.modelAdotante.nome,null,3) &&
      this.ruleValidateFields(this.modelAdotante.endereco,null,0) &&
      this.ruleValidateFields(this.modelAdotante.bairro,null,3) &&
      this.ruleValidateFields(this.modelAdotante.cidade,null,1) &&
      this.ruleValidateFields(this.modelAdotante.telefone,null,8) &&
      this.ruleValidateFields(this.modelAdotante.email,null,6) &&
      this.ruleValidateFields(this.modelAdotante.rg,null,9) &&
      this.ruleValidateFields(this.modelAdotante.cpf,null,11)){
      return true;
    } else {
      return false;
    }
  }

  ruleValidateFields(field,type,minChar){
    if(field != '' && field != undefined && field.length >= minChar){
      return true;
    }else{
      return false;
    }
  }

questionPage = QuestionPage;

}