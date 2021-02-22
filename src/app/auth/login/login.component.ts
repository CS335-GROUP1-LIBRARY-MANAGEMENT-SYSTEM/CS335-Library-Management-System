import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../shared/auth.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {LocalStorageService} from 'ngx-webstorage';
import {ThemePalette} from '@angular/material/core';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  role:string;
  loginForm:FormGroup;
  isError!:boolean;
  isLoading:boolean;
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'indeterminate';
  value = 50;


  constructor(private formBuilder: FormBuilder
              ,private authService:AuthService,private router:Router,
              private toastr:ToastrService,private activeRoute:ActivatedRoute,
              private localStorageService:LocalStorageService,
              public snack: MatSnackBar) { }

  ngOnInit(): void {

    this.loginForm=this.formBuilder.group({
      username:['',Validators.required],
      password:['',Validators.required]
    });
    this.snack.open('if your not a member, i.e you dont have the credentials to login. Reach out to our library' + ' '+
      'and register yourself.' +
      '  ' + ' ' +
      'YOUR MOST WELCOME', 'Ok', { verticalPosition: 'top', horizontalPosition: 'end', duration: 500000});
  }

  get f(){
    return(this.loginForm.controls);
  }

  onSubmit(){
    this.isLoading=true;
    this.authService.login(this.loginForm.value).subscribe(loginResponse=>{

      if (loginResponse) {
        this.isLoading=false
        this.isError = false;
        let url = this.localStorageService.retrieve('returnUrl')
        if (url) {
          console.log('we are here ');
          this.router.navigate([url]);
          this.toastr.success('login successfull');
        }else {
          this.role=this.localStorageService.retrieve("role");
          if(this.role=="USER"){
            this.router.navigateByUrl("/user")
            this.toastr.success('login successfull');
          }else {
            this.router.navigateByUrl("/admin")
            this.toastr.success('login successfull');
          }

        }

      }
    },()=>{
      this.isLoading=false
      this.isError=true;
      //this.toastr.error("wrong username and password");
    })
  }


}
