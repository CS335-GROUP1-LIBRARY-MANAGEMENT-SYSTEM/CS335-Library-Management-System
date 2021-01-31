import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm:FormGroup | any;
  submitted = true;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      Id: ['', Validators.required],
      email: ['',Validators.required,Validators.email],
      mobile: ['', Validators.required],
      password: ['',Validators.required, Validators.minLength(6)],
    })
  }
  get f(){
    return(this.registerForm.controls)
  }
  onSubmit(){
    this.submitted = true;
    console.log(this.registerForm.value)
  }

}
