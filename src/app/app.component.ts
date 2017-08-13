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
  signupForm: FormGroup; //FormGroup is the form type for reactive forms
  forbiddenUsernames = ['Jennifer', 'Bryan'];

  constructor() {} 

  ngOnInit(){
    //set formgroups, formcontrols, and formarrays
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username' : new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails)
      }),
      'gender': new FormControl(null),
      'hobbies': new FormArray([])
    })
    //reactive forms better to give different messages for different types of errors (require, custom errors, async errors)

    //subscribe to value changes
    // this.signupForm.valueChanges.subscribe(
    //   (value) => console.log(value)
    // )

    //subscribe to statusChanges
    // this.signupForm.statusChanges.subscribe(
    //   (status) => console.log(status)  //form is valid or invalid (based on required fields)
    // )

    this.setValue();
    // this.patchValue();
  }

  setValue(){
     //setValue
    this.signupForm.setValue({
      'userData': {
        'username' : 'username test',
        'email': 'j.pham87@gmail.com',
      },
      'gender': '',
      'hobbies': []
    })
  }

  patchValue(){
    this.signupForm.patchValue({
      'userData': {
        'email': 'bryan.sayas@gmail.com',
      }
    })
  }

  onSubmit(){
    console.log(this.signupForm);
    this.onReset();
  }

  onReset(){
    this.signupForm.reset(); //reset classes for reset
  }

  //onAddHobby - button will add additional form fields
  onAddHobby(){
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);  // the array is (<FormArray>this.signupForm.get('hobbies').push(new FormControl(null)))
  }

  //forbiddenNames - custom validation
  //custom validation must either return a property with a true value or return null
  forbiddenNames(control: FormControl): {[s: string]: boolean} {
    if(this.forbiddenUsernames.indexOf(control.value) !== -1){
      return {'nameIsForbidden': true}; //this validates it
    }
    return null; //when not validated
  }

   //async validation by returning promise or observable. field will go to a ng-pending stage
  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>(
      (resolve, reject) => {
        setTimeout( ()=>{
          if(control.value === 'test@test.com'){
            resolve( {'emailIsForbidden': true})
          } else{
            resolve(null)
          }
        }, 1500)
      });
      return promise;
  }


}
