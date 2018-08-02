import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EditFormPage } from '../edit-form/edit-form';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  forms:any = []
  constructor(public navCtrl: NavController) {
    for (let i:number = 0; i < 9; i++){
      this.forms.push({formName: 'Formulario ' + i, answers: 5})
    }
  }

  pushPage(formName){
    this.navCtrl.push(EditFormPage, {form: formName});
  }
}
