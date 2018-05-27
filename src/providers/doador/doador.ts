import { Injectable } from '@angular/core';
import { SQLiteObject } from '@ionic-native/sqlite';
import { DatabaseProvider } from '../database/database';

@Injectable()
export class DoadorProvider {

  constructor(private dbProvider: DatabaseProvider) {
  }

    public insertDoador(doador: Doador){
      return this.dbProvider.getDB()
      .then((db: SQLiteObject) =>{
      let sql = 'INSERT INTO doador (nome, cidade, telefone, email, rg, cpf) VALUES (?, ?, ?, ?, ?, ?)';
      let data = [doador.nome, doador.cidade, doador.telefone, doador.email, doador.rg, doador.cpf];

      return db.executeSql(sql, data)
      .catch((e) => console.error(e));
      })
      .catch((e) => console.error(e));
    }

}
export class Doador{
	id: number;
	nome: string;
	cidade: string;
	telefone: number;
	email: string;
  rg: string;
  cpf: string
}
