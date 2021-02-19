import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { ConfigService } from './config.service';
import {LocalStorageService} from 'ngx-webstorage';
import {User} from './user.model';
import {ThemePalette} from '@angular/material/core';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';
import {ToastrService} from 'ngx-toastr';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registerForm:FormGroup | any;
  submitted = true;
  userModel:User;
  role:string;
  assignRole:string;
  isLoading:boolean;
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'indeterminate';
  value = 50;

  constructor(private formBuilder:FormBuilder,
          private configservice: ConfigService,
          public route: Router,private localStorage:LocalStorageService,
              private toastr:ToastrService, public snack: MatSnackBar) {

    this.userModel={

      createdDate:Date.now(),
      district:'',
      username: '',
      fullName: '',
      ward: '',
      password: '',
      email: '',
      phoneNumber: '',
      region:'',
      role:'',
      street:'',

    }
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      fullName: ['', Validators.required],
      ward: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['',Validators.required,Validators.email],
      street: ['', Validators.required],
      district: ['', Validators.required],
      region: ['', Validators.required],

    })
  }
  get f(){
    return(this.registerForm.controls);
  }
  onSubmit(){
    this.isLoading=true;
    this.role=this.localStorage.retrieve("role");

    this.userModel.username=this.registerForm.get('username').value;
    this.userModel.district=this.registerForm.get('district').value;
    this.userModel.email=this.registerForm.get('email').value;
    this.userModel.fullName=this.registerForm.get('fullName').value;
    this.userModel.password=this.registerForm.get('username').value;
    this.userModel.region=this.registerForm.get('region').value;
    this.userModel.ward=this.registerForm.get('ward').value;
    this.userModel.street=this.registerForm.get('street').value;
    this.userModel.phoneNumber=this.registerForm.get('phoneNumber').value;

    if(this.role==="ADMIN"){
      this.assignRole="LIBRARIAN"
      this.userModel.role=this.assignRole;
      this.configservice.createUser(this.userModel).subscribe(()=>{
        this.isLoading=false;
        // this.route.navigateByUrl('/admin')
        this.snack.open('you have Successfully Added a Librarian', 'Ok', {duration: 3000});
        this.registerForm.resetForm();
      },(err)=>{
        this.isLoading=false;
        // this.toastr.error("fail to assign new book !!! try again")
        this.snack.open('Failed to Add a librarian', 'Ok', {duration: 3000});
        console.log(err);
      });

    }else {
      this.assignRole="USER"
      this.userModel.role=this.assignRole;
      this.configservice.createUser(this.userModel).subscribe(()=>{
        this.isLoading=false
        // this.route.navigateByUrl('/admin')
        this.snack.open('you have Successfully Added a member', 'Ok', {duration: 3000});
        this.registerForm.reset();
      },(err)=>{
        this.isLoading=false;
        // this.toastr.error("fail to assign new user !!! try again")
        this.snack.open('Failed to Add a member', 'Ok', {duration: 3000});
        console.log(err);
      });
    }

  }


}
