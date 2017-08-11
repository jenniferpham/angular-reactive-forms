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
    this.signupForm = new FormGroup({

    })
  }

  onSubmit(){
    console.log();
  }
}
