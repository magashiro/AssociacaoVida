import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { UserFormPage } from '../userForm/userForm';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'page-animalForm',
  templateUrl: 'animalForm.html'
})

export class AnimalFormPage {
	
	goback() {
   		this.navCtrl.pop();
	}

	animalForm: FormGroup;

	constructor(private fb: FormBuilder){
	this.createForm();
	}

	createForm(){
	this.animalForm = this.fb.group({
	nome: ['', Validators.required],
	});
	}

userFormPage = UserFormPage;
homePage = HomePage;

  constructor(public navCtrl: NavController) {

  }

}