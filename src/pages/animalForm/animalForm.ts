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
    if (this.validateFields()){
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

  validateFields(){
    this.ruleValidateFields(this.model.nome,null,3);
    this.ruleValidateFields(this.model.tipo,null,1);
    this.ruleValidateFields(this.model.sexo,null,1);
    this.ruleValidateFields(this.model.anos,null,1);
    this.ruleValidateFields(this.model.meses,null,1);
    this.ruleValidateFields(this.model.porte,null,1);
    this.ruleValidateFields(this.model.temperamento,null,1);
    this.ruleValidateFields(this.model.raca,null,3);
    this.ruleValidateFields(this.model.vacinado,null,1);
    this.ruleValidateFields(this.model.castrado,null,1);
    this.ruleValidateFields(this.model.img,null,0);
  }

  ruleValidateFields(field,type,minChar){
    if(field != '' && field != undefined && field.length >= minChar){
      return true;
    }else{
      return false;
    }
  }
}
