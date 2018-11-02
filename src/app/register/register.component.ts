import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, EmailValidator } from '@angular/forms';
import { AuthenticationService } from '../authentication.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{

  form;


  // Creating the form group model here
  constructor(private fbuilder: FormBuilder, private authsvc : AuthenticationService) {
      this.form = fbuilder.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        emailID: ['', [Validators.required, this.validateEmail]],
        password:['', Validators.required],
        confirmPassword:['', Validators.required]
      }, { validator: this.confirmPassword('password', 'confirmPassword')})
    }

    // VALIDATOR FORMAT ['initialValue', 'validator']
    // FORM GROUP FORMAT: group('MODEL', 'N_NUMBER_VALIDATORS') 
      onSubmit(){
        console.log(this.form.errors);
        this.authsvc.register(this.form.value); // Passing in the current user
      }

     confirmPassword(pwd, cpwd){
        return form => {
          console.log('VALUE',['', Validators.required]);
          if(form.controls[pwd].value !== form.controls[cpwd].value){
              return {
                mismatchedFields : true   // Of the type validator
              }
          }
        }
      }

      validateEmail(){
        return control => {
          var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return regex.test(control.value) ? null : { invalidEMail: true }
        }
      }

  }

