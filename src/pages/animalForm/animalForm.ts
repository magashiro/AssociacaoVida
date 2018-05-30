import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { UserFormPage } from '../userForm/userForm';
import { AnimalProvider, Animal } from '../../providers/animal/animal';
import { PhotoLibrary } from '@ionic-native/photo-library';

  constructor(private photoLibrary : PhotoLibrary ) {
    this.model = new getAlbums();
  }

this.photoLibrary.requestAuthorization().then(() => {
  this.photoLibrary.getLibrary().subscribe({
    next: library => {
      library.forEach(function(libraryItem) {
        console.log(libraryItem.id);          // ID of the photo
        console.log(libraryItem.photoURL);    // Cross-platform access to photo
        console.log(libraryItem.thumbnailURL);// Cross-platform access to thumbnail
        console.log(libraryItem.fileName);
        console.log(libraryItem.width);
        console.log(libraryItem.height);
        console.log(libraryItem.creationDate);
        console.log(libraryItem.latitude);
        console.log(libraryItem.longitude);
        console.log(libraryItem.albumIds);    // array of ids of appropriate AlbumItem, only of includeAlbumsData was used
      });
    },
    error: err => { console.log('could not get photos'); },
    complete: () => { console.log('done getting photos'); }
  });
})
.catch(err => console.log('permissions weren\'t granted'));

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
