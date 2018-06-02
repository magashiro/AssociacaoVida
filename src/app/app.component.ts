import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
import { DatabaseProvider } from '../providers/database/database';
import { Keyboard } from '@ionic-native/keyboard';

@Component({
  templateUrl: 'app.html',
  providers: [Keyboard]
})
export class MyApp {
  rootPage:any = null;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, dbProvider: DatabaseProvider, private keyboard: Keyboard) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();

      dbProvider.createDatabase()
      .then(() => {
      	this.openTabsPage(splashScreen);
      })
      .catch(() => {
      	this.openTabsPage(splashScreen);
      });
      this.keyboard.onKeyboardShow().subscribe(() => {
          document.body.classList.add('keyboard-is-open');
      });

      this.keyboard.onKeyboardHide().subscribe(() => {
          document.body.classList.remove('keyboard-is-open');
      });
    });
  }

  private openTabsPage(splashScreen: SplashScreen){
  	splashScreen.hide();
  	this.rootPage = TabsPage;
  }
}
