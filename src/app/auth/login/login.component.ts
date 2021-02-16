import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../shared/auth.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {LocalStorageService} from 'ngx-webstorage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  role:string;
  loginForm:FormGroup;
  isError!:boolean;



  constructor(private formBuilder: FormBuilder
              ,private authService:AuthService,private router:Router,
              private toastr:ToastrService,private activeRoute:ActivatedRoute,
              private localStorageService:LocalStorageService) { }

  ngOnInit(): void {

    this.loginForm=this.formBuilder.group({
      username:['',Validators.required],
      password:['',Validators.required]
    })
  }

  get f(){
    return(this.loginForm.controls);
  }

  onSubmit(){
    this.authService.login(this.loginForm.value).subscribe(loginResponse=>{

      if (loginResponse) {
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
      this.isError=true;
      //this.toastr.error("wrong username and password");
    })
  }


}
