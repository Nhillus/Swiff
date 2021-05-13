import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DatabaseService } from '../database/database.service';
 
@Component({
  selector: 'app-pruebausuario',
  templateUrl: './pruebausuario.page.html',
  styleUrls: ['./pruebausuario.page.scss'],
})
export class PruebausuarioPage  {

  constructor(public navCtrl: NavController,private database: DatabaseService) { }
  
  CreateUser(){
    this.database.CreateUser(1,"Erik","Tome").then((data) =>{
      console.log(data);
    }, (error) => {
      console.log(error);
    })
  }
  GetAllUser(){
      this.database.GetAllUsers().then((data: any) => {
        console.log(data);
      }, (error) => {
        console.log(error);
      })
    }

  

}
