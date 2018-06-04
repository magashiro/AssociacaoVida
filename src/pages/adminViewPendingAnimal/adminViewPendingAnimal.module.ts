import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdminViewPendingAnimalPage } from './AdminViewPendingAnimal';

@NgModule({
  declarations: [
    AdminViewPendingAnimalPage,
  ],
  imports: [
    IonicPageModule.forChild(AdminViewPendingAnimalPage),
  ],
})
export class AdminViewPendingAnimalPageModule {}
