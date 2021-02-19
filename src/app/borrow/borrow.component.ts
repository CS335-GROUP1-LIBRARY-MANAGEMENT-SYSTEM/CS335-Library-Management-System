import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-borrow',
  templateUrl: './borrow.component.html',
  styleUrls: ['./borrow.component.css']
})
export class BorrowComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  thirdFormGroup :FormGroup;
  secondFormGroup: FormGroup;


  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(){
    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

    this.thirdFormGroup = this.formBuilder.group({
      thirdCtrl: ['', Validators.required] 
    })
  }

}
