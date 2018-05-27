import { Injectable } from '@angular/core';
import { SQLiteObject } from '@ionic-native/sqlite';
import { DatabaseProvider } from '../database/database';


@Injectable()
export class AdotanteProvider {

  constructor(private dbProvider: DatabaseProvider) {
    
  }

    public insertAdotante(adotante: Adotante){
      return this.dbProvider.getDB()
      .then((db: SQLiteObject) =>{
      let sql = 'INSERT INTO adotante (nome, endereco, bairro, cidade, telefone, email, rg, cpf, Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
      let data = [adotante.nome, adotante.endereco, adotante.bairro, adotante.cidade, adotante.telefone, adotante.email, adotante.rg, adotante.cpf, adotante.Q1, adotante.Q2, adotante.Q3, adotante.Q4, adotante.Q5, adotante.Q6, adotante.Q7, adotante.Q8];

      return db.executeSql(sql, data)
      .catch((e) => console.error(e));
      })
      .catch((e) => console.error(e));
    }

    // public updateQuestionsAdotante(adotante: Adotante){
    //   return this.dbProvider.getDB()
    //   .then((db: SQLiteObject) =>{
    //   let sql = 'update adotante set Q1 = ?, Q2 = ?, Q3 = ?, Q4 = ?, Q5 = ?, Q6 = ?, Q7 = ?, Q8 = ? where id = ?';
    //   let data = [adotante.id, adotante.Q1, adotante.Q2, adotante.Q3, adotante.Q4, adotante.Q5, adotante.Q6, adotante.Q7, adotante.Q8];

    //   return db.executeSql(sql, data)
    //   .catch((e) => console.error(e));
    //   })
    //   .catch((e) => console.error(e));
    // }

}


export class Adotante {
	id: number;
	nome: string;
	endereco: string;
	bairro: string;
	cidade: string;
	telefone: number;
	email: string;
	rg: string;
	cpf: string;
  Q1: string;
  Q2: string;
  Q3: string;
  Q4: string;
  Q5: string;
  Q6: string;
  Q7: string;
  Q8: string;
}