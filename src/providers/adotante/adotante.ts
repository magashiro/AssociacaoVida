import { Injectable } from '@angular/core';
import { SQLiteObject } from '@ionic-native/sqlite';
import { DatabaseProvider } from '../database/database';


@Injectable()
export class AdotanteProvider {

  constructor(private dbProvider: DatabaseProvider) {
    
  }

}
