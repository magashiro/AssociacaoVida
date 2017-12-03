import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AnimalShow } from './animalShow';

@NgModule({
  declarations: [
    AnimalShow,
  ],
  imports: [
    IonicPageModule.forChild(AnimalShow),
  ],
})
export class AnimalShowModule {}