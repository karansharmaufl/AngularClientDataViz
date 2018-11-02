import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{

  form;


  // Creating the form group model here
  constructor(private fbuilder: FormBuilder) {
      this.form = fbuilder.group({
        firstName: '',
        lastName: '',
        emailID: '',
        password:'',
        confirmPassword:''
      })
    }

      onSubmit(){
        console.log(this.form.value);
      }


  }

