import { ExpressionBinding } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {

 borrowed = new Date(2021, 2, 12);
 expiring = new Date(2021, 2, 21);

 remaining = this.expiring.getDate() - this.borrowed.getDate();

  constructor() { 
    

    

  }

  ngOnInit(): void {
  }

}
