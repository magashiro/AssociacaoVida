import { Injectable } from '@angular/core';
import { SQLiteObject } from '@ionic-native/sqlite';
import { DatabaseProvider } from '../database/database';


@Injectable()
export class AdminProvider {

  constructor(private dbProvider: DatabaseProvider) {
  }

  public authenticate(login: string, senha: string): Promise<Admin> {
    return new Promise((resolve, reject) => {
        this.dbProvider.getDB().then((db: SQLiteObject) => {
          const sql = 'select * from usuario where login = ? and senha = ?';
          const data = [login, senha];
          return db.executeSql(sql, data)
          .then((data: any) =>{
            if (data.rows.length > 0) {
              const item = data.rows.item(0);
              const admin = new Admin();

              admin.id = item.id;
              admin.login = item.login;
              admin.senha = item.senha;

              resolve(admin);
            } else {
              reject();
            }
        }).catch(e => reject(e));
      }).catch(e => reject(e));
    

    });
  }
}
    

export class Admin {
	id: number;
	login: string;
	senha: string;
}


      // return this.dbProvider.getDB()
      // .then((db: SQLiteObject) =>{
      //   let sql = 'SELECT * from usuario where login = ?';
      //   var data: any[] = [];
      //   return db.executeSql(sql, data)
      //   .then((data: any) =>{
      //     if (data.rows.length > 0){
      //       let admins: any[] = [];
      //       for (var i = 0; i < data.rows.length; i++){
      //         var admin = data.rows.item(i);
      //         admins.push(admin);
      //       }
      //     return admins;
      //     } else{
      //       return [];
      //     }
      //   })
      //   .catch((e) => console.error(e));
      //   })
      // .catch((e) => console.error(e));

      // return this.dbProvider.getDB()
      // .then((db: SQLiteObject) =>{
      // let sql = 'SELECT * from usuario where login = ? and senha = ?';
      // let data = [login, senha];
      // return db.executeSql(sql, data)
      // .catch((e) => console.error(e));
      // })
      // .catch((e) => console.error(e));

      //       return this.dbProvider.getDB()
      // .then((db: SQLiteObject) =>{
      //   let sql = 'SELECT * from usuario where login = ?';
      //   var data: any[] = [];
      //   return db.executeSql(sql, data)
      //   .then((data: any) =>{
      //     if (data.rows.length > 0){
      //       let admins: any[] = [];
      //       for (var i = 0; i < data.rows.length; i++){
      //         var admin = data.rows.item(i);
      //         admins.push(admin);
      //       }
      //     return admins;
      //     } else{
      //       return [];
      //     }
      //   })
      //   .catch((e) => console.error(e));
      //   })
      // .catch((e) => console.error(e));