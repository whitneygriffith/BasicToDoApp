import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  todo = []
  item = ""
 


  constructor(public navCtrl: NavController) {

  }

  addTodo(){
    this.todo.push(this.item);
  }

  deleteTodo(i){
    this.todo.splice(i, 1);
  }

}
