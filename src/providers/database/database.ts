import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

@Injectable()

export class DatabaseProvider {

  constructor(private sqlite: SQLite) {}

      public getDB(){
        return this.sqlite.create({
          name: 'animal.db',
          location: 'default'
        });
      }

      public createDatabase(){
        return this.getDB()
          .then((db: SQLiteObject) =>{
          this.createTables(db);

          this.insertDefaultItems(db);
          })
          .catch(e => console.error(e));
      }

      private createTables(db: SQLiteObject){
        db.sqlBatch([
          ['CREATE TABLE IF NOT EXISTS usuario (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, login TEXT, senha TEXT)'],
          ['CREATE TABLE IF NOT EXISTS animal (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, status TEXT, tipo TEXT, nome TEXT, sexo TEXT, anos INTEGER, meses INTEGER, porte TEXT, temperamento TEXT, raca TEXT, vacinado TEXT, castrado TEXT, info TEXT, img TEXT, nomeDoador TEXT, cidadeDoador TEXT, telefoneDoador INTEGER, emailDoador TEXT, id_adotante TEXT, FOREIGN KEY (id_adotante) REFERENCES adotante (cpf))'],          
          ['CREATE TABLE IF NOT EXISTS adotante (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, nome TEXT, endereco TEXT, bairro TEXT, cidade TEXT, telefone INTEGER, email TEXT, rg TEXT, cpf TEXT, Q1 TEXT, Q2 TEXT, Q3 TEXT, Q4 TEXT, Q5 TEXT, Q6 TEXT, Q7 TEXT, Q8 TEXT)']
        ])
        .then(() => console.log('Tabelas Criadas'))
        .catch(e => console.error('Erro ao criar as tabelas', e));
      }

      private insertDefaultItems(db: SQLiteObject){
        db.executeSql('select COUNT(id) as qtd from usuario', {})
        .then((data: any) =>{
          if (data.rows.item(0).qtd == 0){
            db.sqlBatch([
              ['INSERT INTO animal (login, senha) VALUES (?, ?)', ['admin', 'admin']]
            ])
            .then(() => console.log('Dados padrões incluídos'))
            .catch(e => console.error('Erro ao incluir dados padrões', e));
          }
        })
        .catch(e => console.error('Erro ao consultar a qtd de animais', e));
      }

}
