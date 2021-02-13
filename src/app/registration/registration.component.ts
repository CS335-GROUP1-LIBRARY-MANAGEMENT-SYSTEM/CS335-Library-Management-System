import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { ConfigService } from './config.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registerForm:FormGroup | any;
  submitted = true;

  constructor(private formBuilder:FormBuilder,
          private configservice: ConfigService,
          public route: Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      IdNo: ['', Validators.required],
      email: ['',Validators.required,Validators.email],
      mobile: ['', Validators.required],
      password: ['',Validators.required, Validators.minLength(6)],
    })
  }
  get f(){
    return(this.registerForm.controls)
  }
  onSubmit(){
    // this.submitted = true;
    // console.log(this.registerForm.value)
    this.configservice.createUser(this.registerForm.value).subscribe(
      data => console.log('success', data),
      error =>console.error('error', error)
    )
  }


}
