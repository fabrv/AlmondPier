import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EditFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-form',
  templateUrl: 'edit-form.html',
})
export class EditFormPage {  
  formName: string;
  form: any = {"FORM_NAME":"TEST_FORM","DATE_CREATED":"2018-05-31","CODE":"2","QUESTIONS":[{"TYPE":2,"QUESTION":"What was the last thing you created?","QUESTION_ID":1,"OPTIONS":[{"OPTION_CAPTION":null,"OPTION_VALUE":null}],"ANSWER":"Test"},{"TYPE":1,"QUESTION":"Who is a better cook your mother or grandmother?","QUESTION_ID":2,"OPTIONS":[{"OPTION_CAPTION":"MOTHER","OPTION_VALUE":"0"},{"OPTION_CAPTION":"GRANDMOTHER","OPTION_VALUE":"1"}],"ANSWER":"1"},{"TYPE":5,"QUESTION":"Could you survive in the wilderness for a month?","QUESTION_ID":3,"OPTIONS":[{"OPTION_CAPTION":null,"OPTION_VALUE":null}],"ANSWER":"1"},{"TYPE":2,"QUESTION":"What’s your “going to bed” routine?","QUESTION_ID":4,"OPTIONS":[{"OPTION_CAPTION":null,"OPTION_VALUE":null}],"ANSWER":"asdf"},{"TYPE":9,"QUESTION":"What's your favorite colour?","QUESTION_ID":5,"OPTIONS":[{"OPTION_CAPTION":null,"OPTION_VALUE":null}],"ANSWER":""},{"TYPE":2,"QUESTION":"Whats your name?","QUESTION_ID":6,"OPTIONS":[{"OPTION_CAPTION":null,"OPTION_VALUE":null}],"ANSWER":"asdf"},{"TYPE":6,"QUESTION":"How overrated is Pink Floyd?","QUESTION_ID":8,"OPTIONS":[{"OPTION_CAPTION":null,"OPTION_VALUE":null}],"ANSWER":71},{"TYPE":7,"QUESTION":"How old are you?","QUESTION_ID":9,"OPTIONS":[{"OPTION_CAPTION":null,"OPTION_VALUE":null}],"ANSWER":"12"},{"TYPE":8,"QUESTION":"When did you discover Radiohead?","QUESTION_ID":10,"OPTIONS":[{"OPTION_CAPTION":null,"OPTION_VALUE":null}],"ANSWER":"2018-06-22"}],"FINISHED_DATE":"2018-6-22 17:32:42","LAST_SLIDE":0,"FILLED_NO":14};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.formName = navParams.get('form');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditFormPage');
  }

}
