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
import { AnimalList } from '../pages/animalList/animalList';
import { PesquisaAnimal} from '../pages/pesquisaAnimal/pesquisaAnimal';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DatabaseProvider } from '../providers/database/database';
import { IonicStorageModule } from '@ionic/storage';
import { HttpModule } from '@angular/http';
import { SQLitePorter } from '@ionic-native/sqlite-porter';
import { SQLite } from '@ionic-native/sqlite';
import { AnimalProvider } from '../providers/animal/animal';
import { AdotanteProvider } from '../providers/adotante/adotante';
import { DoadorProvider } from '../providers/doador/doador';
import { AdoptFormPage } from '../pages/adoptForm/adoptForm';
import { QuestionPage } from '../pages/question/question';
import { DonateSuccessPage } from '../pages/donateSuccess/donateSuccess';

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
    AnimalList,
    PesquisaAnimal,
    AdoptFormPage,
    QuestionPage,
    DonateSuccessPage
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
    AnimalList,
    PesquisaAnimal,
    AdoptFormPage,
    QuestionPage,
    DonateSuccessPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DatabaseProvider,
    SQLitePorter,
    SQLite,
    AnimalProvider,
    AdotanteProvider,
    DoadorProvider
  ]
})

export class AppModule {}
