import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { AnimalFormPage } from '../pages/animalForm/animalForm';
import { UserFormPage } from '../pages/userForm/userForm';
import { ConfirmAdoptPage } from '../pages/confirmAdopt/confirmAdopt';
import { AdoptSuccessPage } from '../pages/adoptSuccess/adoptSuccess';
import { ListaAnimais } from '../pages/listaAnimais/listaAnimais';
import { PesquisaAnimal} from '../pages/pesquisaAnimal/pesquisaAnimal';
import { Storage } from '@ionic/storage';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DatabaseProvider } from '../providers/database/database';
import { IonicStorageModule } from '@ionic/storage';
import { HttpModule } from '@angular/http';
import { SQLitePorter } from '@ionic-native/sqlite-porter';
import { SQLite } from '@ionic-native/sqlite';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AnimalFormPage,
    UserFormPage,
    ConfirmAdoptPage,
    AdoptSuccessPage,
    ListaAnimais,
    PesquisaAnimal
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AnimalFormPage,
    UserFormPage,
    ConfirmAdoptPage,
    AdoptSuccessPage,
    ListaAnimais,
    PesquisaAnimal
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DatabaseProvider,
    SQLitePorter,
    SQLite
  ]
})

export class AppModule {}
