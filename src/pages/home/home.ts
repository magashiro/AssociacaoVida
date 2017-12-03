import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AnimalFormPage } from '../animalForm/animalForm';
import { ListaAnimais } from '../listaAnimais/listaAnimais';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
listaAnimais = ListaAnimais;
animalFormPage = AnimalFormPage;
  constructor(public navCtrl: NavController) {

  }
}
