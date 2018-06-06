import { Component } from '@angular/core';
import { NavController, ActionSheetController, ToastController, Platform, LoadingController, Loading } from 'ionic-angular';
import { HomePage } from '../home/home';
import { UserFormPage } from '../userForm/userForm';
import { AnimalProvider, Animal } from '../../providers/animal/animal';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { File } from '@ionic-native/file';
import { Transfer, TransferObject } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';

declare var cordova: any;

@Component({
  selector: 'page-animalForm',
  templateUrl: 'animalForm.html'
})

export class AnimalFormPage {
  model: Animal;
  animals: any[] = [];
  lastImage: string = null;
	goback() {
   		this.navCtrl.pop();
	}



userFormPage = UserFormPage;
homePage = HomePage;
 
  constructor(public navCtrl: NavController, private camera: Camera, private transfer: Transfer, private file: File, private filePath: FilePath, public actionSheetCtrl: ActionSheetController, public toastCtrl: ToastController, public platform: Platform, public loadingCtrl: LoadingController) {
    this.model = new Animal();
  }

  public presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Selecione a imagem',
      buttons: [
        {
          text: 'Carregar da biblioteca',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
          }
        },
        {
          text: 'Tirar foto',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.CAMERA);
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel'
        }
      ]
    });
    actionSheet.present();
  }

  public takePicture(sourceType) {
    var options = {
      quality: 100,
      sourceType: sourceType,
      saveToPhotoAlbum: false,
      correctOrientation: true
    };
   
    this.camera.getPicture(options).then((imagePath) => {
      if (this.platform.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
        this.filePath.resolveNativePath(imagePath)
          .then(filePath => {
            let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
            let currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
            this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
          });
      } else {
        var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
        var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
        this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
      }
    }, (err) => {
      this.presentToast('Erro ao selecionar uma imagem');
    });
  }

  private createFileName() {
    var d = new Date(),
    n = d.getTime(),
    newFileName =  n + ".jpg";
    return newFileName;
  }

  private copyFileToLocalDir(namePath, currentName, newFileName) {
    this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(success => {
      this.lastImage = newFileName;
    }, error => {
      this.presentToast('Error while storing file.');
    });
  }  

  private presentToast(text) {
    let toast = this.toastCtrl.create({
      message: text,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }

  public pathForImage(img) {
    if (img === null) {
      return '';
    } else {
      return cordova.file.dataDirectory + img;
    }
  }



  save(){
    if (this.model.info == '' || this.model.info == null || this.model.info == undefined){
      this.model.info = 'Sem informação adicional';
    }
    this.model.img = this.pathForImage(this.lastImage);
    this.validateFields();
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
        img: this.pathForImage(this.lastImage)
      });
    }
  }

  validateFields(){
    if(
      this.ruleValidateFields(this.model.nome,null,3) &&
      this.ruleValidateFields(this.model.tipo,null,1) &&
      this.ruleValidateFields(this.model.nome,null,3) &&
      this.ruleValidateFields(this.model.tipo,null,1) &&
      this.ruleValidateFields(this.model.sexo,null,1) &&
      this.ruleValidateFields(this.model.anos,null,1) &&
      this.ruleValidateFields(this.model.meses,null,1) &&
      this.ruleValidateFields(this.model.porte,null,1) &&
      this.ruleValidateFields(this.model.temperamento,null,1) &&
      this.ruleValidateFields(this.model.raca,null,3) &&
      this.ruleValidateFields(this.model.vacinado,null,1) &&
      this.ruleValidateFields(this.model.castrado,null,1) &&
      this.ruleValidateFields(this.model.img,null,0)){
      return true;
    } else {
      this.presentToast('Preencha todos os campos!');
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
}
