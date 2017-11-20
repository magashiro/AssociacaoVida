import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AnimalDataPage } from '../animalData/animalData';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'page-animalForm',
  templateUrl: 'animalForm.html'
})
export class AnimalFormPage {
	dadosAnimal: FormGroup;
	goback() {
   		this.navCtrl.pop();
	}

animalDataPage = AnimalDataPage;
homePage = HomePage;
  constructor(public navCtrl: NavController) {

  }



}
