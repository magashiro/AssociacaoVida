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
          ['CREATE TABLE IF NOT EXISTS animal (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, tipo TEXT, nome TEXT, sexo TEXT, anos INTEGER, meses INTEGER, porte TEXT, temperamento TEXT, raca TEXT, vacinado TEXT, castrado TEXT, info TEXT, img TEXT, id_adotante INTEGER, id_doador INTEGER, FOREIGN KEY (id_adotante) REFERENCES adotante (id), FOREIGN KEY (id_doador) REFERENCES doador(id))'],
          ['CREATE TABLE IF NOT EXISTS adotante (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, nome TEXT, endereco TEXT, bairro TEXT, cidade TEXT, telefone INTEGER, email TEXT, rg TEXT, cpf TEXT)'],
          ['CREATE TABLE IF NOT EXISTS doador (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, nome TEXT, cidade TEXT, telefone INTEGER, email TEXT)']
        ])
        .then(() => console.log('Tabelas Criadas'))
        .catch(e => console.error('Erro ao criar as tabelas', e));
      }

      private insertDefaultItems(db: SQLiteObject){
        db.executeSql('select COUNT(id) as qtd from animal', {})
        .then((data: any) =>{
          if (data.rows.item(0).qtd == 0){
            db.sqlBatch([
              ['INSERT INTO animal (tipo, nome, sexo, anos, meses, porte, temperamento, raca, vacinado, castrado, info, img) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['cão', 'pan1', 'F', 7, 5, 'pequeno', 'dócil', 'SRD', 'sim', 'sim', 'nenhuma info', 'img']]
            ])
            .then(() => console.log('Dados padrões incluídos'))
            .catch(e => console.error('Erro ao incluir dados padrões', e));
          }
        })
        .catch(e => console.error('Erro ao consultar a qtd de animais', e));
      }

}
