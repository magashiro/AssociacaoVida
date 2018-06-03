import { Injectable } from '@angular/core';
import { SQLiteObject } from '@ionic-native/sqlite';
import { DatabaseProvider } from '../database/database';


@Injectable()
export class AdminProvider {

  constructor((private dbProvider: DatabaseProvider) {
  }

  public checkUser(login: string, senha: string){
      return this.dbProvider.getDB()
      .then((db: SQLiteObject) =>{
  		let sql = 'SELECT * from usuario where login = ? and senha = ?';
    	let data = [login, senha];
  		return db.executeSql(sql, data)
  		.catch((e) => console.error(e));
  		})
  		.catch((e) => console.error(e));
  	}
}

export class Admin {
	id: number;
	login: string;
	senha: string;
}
