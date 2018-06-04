import { Injectable } from '@angular/core';
import { SQLiteObject } from '@ionic-native/sqlite';
import { DatabaseProvider } from '../database/database';


@Injectable()
export class AnimalProvider {

  constructor(private dbProvider: DatabaseProvider) {
    
  }

    public insertAnimal(animal: Animal){
  		return this.dbProvider.getDB()
  		.then((db: SQLiteObject) =>{
  		let sql = 'INSERT INTO animal (status, tipo, nome, sexo, anos, meses, porte, temperamento, raca, vacinado, castrado, info, img, nomeDoador, cidadeDoador, telefoneDoador, emailDoador) VALUES ("New", ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
  		let data = [animal.tipo, animal.nome, animal.sexo, animal.anos, animal.meses, animal.porte, animal.temperamento, animal.raca, animal.vacinado, animal.castrado, animal.info, animal.img, animal.nomeDoador, animal.cidadeDoador, animal.telefoneDoador, animal.emailDoador];

  		return db.executeSql(sql, data)
  		.catch((e) => console.error(e));
  		})
  		.catch((e) => console.error(e));
  	}

    public acceptAdopt(id: number){
      return this.dbProvider.getDB()
      .then((db: SQLiteObject) =>{
      let sql = 'UPDATE animal set status = "Adopted" where id = ?';
      let data = [id];

      return db.executeSql(sql, data)
      .catch((e) => console.error(e));
      })
      .catch((e) => console.error(e));
    }

    public rejectAdopt(id: number){
      return this.dbProvider.getDB()
      .then((db: SQLiteObject) =>{
      let sql = 'UPDATE animal set status = "New" where id = ?';
      let data = [id];

      return db.executeSql(sql, data)
      .catch((e) => console.error(e));
      })
      .catch((e) => console.error(e));
    }

    public updateIdAdotante(cpf: string, id: number){
  		return this.dbProvider.getDB()
  		.then((db: SQLiteObject) =>{
  		let sql = 'UPDATE animal set id_adotante = (select cpf from adotante where cpf = ?), status = "Pending" where id = ?';
      let data = [cpf, id];

  		return db.executeSql(sql, data)
  		.catch((e) => console.error(e));
  		})
  		.catch((e) => console.error(e));
  	}

    public getNew(nome: string = null){
      return this.dbProvider.getDB()
      .then((db: SQLiteObject) =>{
        let sql = 'select * from animal where status = "New"';
        var data: any[] = [];
        if (nome){
          sql += ' and nome like ?';
          data.push('%' + nome + '%');
        }
        return db.executeSql(sql, data)
        .then((data: any) =>{
          if (data.rows.length > 0){
            let animals: any[] = [];
            for (var i = 0; i < data.rows.length; i++){
              var animal = data.rows.item(i);
              animals.push(animal);
            }
          return animals;
          } else{
            return [];
          }
        })
        .catch((e) => console.error(e));
        })
      .catch((e) => console.error(e));
  	}

    public getPending(nome: string = null){
      return this.dbProvider.getDB()
      .then((db: SQLiteObject) =>{
        let sql = 'select * from animal where status = "Pending"';
        var data: any[] = [];
        if (nome){
          sql += ' and nome like ?';
          data.push('%' + nome + '%');
        }
        return db.executeSql(sql, data)
        .then((data: any) =>{
          if (data.rows.length > 0){
            let animals: any[] = [];
            for (var i = 0; i < data.rows.length; i++){
              var animal = data.rows.item(i);
              animals.push(animal);
            }
          return animals;
          } else{
            return [];
          }
        })
        .catch((e) => console.error(e));
        })
      .catch((e) => console.error(e));
    }

    public get(id: number){
      return this.dbProvider.getDB()
      .then((db: SQLiteObject) =>{
        let sql = 'select * from animal where id = ?';
        let data = [id];

        return db.executeSql(sql, data)
        .then((data: any) =>{
          if (data.rows.length > 0){
          let item = data.rows.item(0);
          let animal = new Animal();
          animal.id = item.id;
          animal.tipo = item.tipo;
          animal.nome = item.nome;
          animal.sexo = item.sexo;
          animal.anos = item.anos;
          animal.meses = item.meses;
          animal.porte = item.porte;
          animal.temperamento = item.temperamento;
          animal.raca = item.raca;
          animal.castrado = item.castrado;
          animal.vacinado = item.vacinado;
          animal.info = item.info;
          animal.img = item.img;
          animal.id_adotante = item.id_adotante;
          animal.nomeDoador = item.nomeDoador;
          animal.cidadeDoador = item.cidadeDoador;
          animal.emailDoador = item.emailDoador;
          animal.telefoneDoador = item.telefoneDoador;

          return animal;
        }
      return null;
      })
    .catch((e) => console.error(e));
    })
    .catch((e) => console.error(e));
    }

  	public getAll(nome: string = null){
  		return this.dbProvider.getDB()
  		.then((db: SQLiteObject) =>{
	  		let sql = 'select * from animal';
	  		var data: any[] = [];
	  		if (nome){
	  			sql += 'where nome like ?';
	  			data.push('%' + nome + '%');
	  		}
	  		return db.executeSql(sql, data)
  			.then((data: any) =>{
	  			if (data.rows.length > 0){
	  				let animals: any[] = [];
	  				for (var i = 0; i < data.rows.length; i++){
	  					var animal = data.rows.item(i);
	  					animals.push(animal);
	  				}
	  			return animals;
	  			} else{
	  				return [];
	  			}
  			})
	  		.catch((e) => console.error(e));
  			})
  		.catch((e) => console.error(e));
  	}
}

export class Animal{
	id: number;
  status: string;
	tipo: string;
  nome: string;
	sexo: string;
	anos: number;
	meses: number;
	porte: string;
	temperamento: string;
	raca: string;
  castrado: string;
	vacinado: string;
	info: string;
	img: string;
  nomeDoador: string;
  emailDoador: string;
  cidadeDoador: string;
  telefoneDoador: number;
	id_adotante: number;
}
