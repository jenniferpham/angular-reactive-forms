import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup; //FormGroup is the form type ofr reactive forms

  constructor() {} 

  ngOnInit(){
    //set formgroups, formcontrols, and formarrays
    this.signupForm = new FormGroup({
      'usernameData': new FormGroup({
        'username' : new FormControl(null),
        'email': new FormControl(null)
      }),
      'gender': new FormControl(null),
      'hobbies': new FormArray([])
    })

    //subscribe to value changes

    //subscribe to statusChanges

    //setValue

    //patchValue
  }

  onSubmit(){
    console.log();
  }

  //onAddHobby - button will add additional form fields

  //forbiddenNames - custom validation

  //async validation by returning promise or observable. field will go to a ng-pending stage
}
