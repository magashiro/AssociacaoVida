import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { SQLitePorter } from '@ionic-native/sqlite-porter';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs/Rx';
import { Storage } from '@ionic/storage';

@Injectable()
export class DatabaseProvider {
	database: SQLiteObject;
	private databaseReady: BehaviorSubject<boolean>;

  constructor(public sqlitePorter: SQLitePorter, private storage: Storage, private sqlite: SQLite, private platform: Platform, private http: Http) {
    this.databaseReady = new BehaviorSubject(false);
    this.platform.ready().then(() => {
    	this.sqlite.create({
    		name: 'db_av.db',
    		location: 'default'
    	})
      .then((db: SQLiteObject) => {
    		this.database = db;
    		this.storage.get('database_filled').then(val =>{
    			if (val) {
    				this.databaseReady.next(true);
    			} else{
    				this.fillDatabase();
    			}
    		});
    	});
    });
  }

  fillDatabase(){
  	this.http.get('assets/db_av.sql')
  	.map(res => res.text())
  	.subscribe(sql => {
  		this.sqlitePorter.importSqlToDb(this.database, sql)
  		.then(data => {
  			this.databaseReady.next(true);
  			this.storage.set('database_filled', true);
  		})
  		.catch(e => console.log(e));
  	});
  }

  addAnimal(tipo, nome, sexo, anos, meses, porte, temperamento, raca, vacinado, castrado, info, img) {
    let data = [tipo, nome, sexo, anos, meses, porte, temperamento, raca, vacinado, castrado, info, img];
    return this.database.executeSql("INSERT INTO animal (tipo, nome, sexo, anos, meses, porte, temperamento, raca, vacinado, castrado, info, img) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", data).then(data =>{
        return data;
      }, err =>{
        console.log('Error', err);
        return err;
      });
    }


//  removeAnimalTemp() {
//    return this.database.executeSql("DELETE FROM animalsTemp", []);
//  }

  getAllAnimals(){
  	return this.database.executeSql("SELECT * FROM animal", []).then((data) => {
  		let animals = [];
  		if (data.rows.length > 0){
  			for (var i = 0; i < data.rows.length; i++){
  				animals.push({
  				tipo: data.rows.item(i).tipo,
  				nome: data.rows.item(i).nome,
  				sexo: data.rows.item(i).sexo,
  				anos: data.rows.item(i).anos,
  				meses: data.rows.item(i).meses,
  				porte: data.rows.item(i).porte,
  				temperamento: data.rows.item(i).temperamento,
  				raca: data.rows.item(i).raca,
  				vacinado: data.rows.item(i).vacinado,
  				castrado: data.rows.item(i).castrado,
  				info: data.rows.item(i).info,
  				img: data.rows.item(i).img
  				});
  			}
  		}
  		return animals;
  	}, err => {
  		console.log('Error', err);
  		return [];
  	});
  }


  getDatabaseState(){
  	return this.databaseReady.asObservable();
  }
}
