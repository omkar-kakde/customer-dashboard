import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../service/customer.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup , MaxLengthValidator, Validators } from '@angular/forms';


@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.scss']
})
export class CustomerAddComponent implements OnInit {

  loginform = new FormGroup({
    id: new FormControl('',[Validators.required]),
    first_name: new FormControl('',[Validators.required]),
    last_name: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required, Validators.pattern("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")]),
    phone_no: new FormControl('',[Validators.required,Validators.minLength(10)])

  })

  constructor(private service : CustomerService,
       private router : Router
    ) { }

  ngOnInit(): void {
    
  }

  get f(){
    return this.loginform.controls
  }

  createCard(){
    console.log(this.loginform.value);
  this.service.create(this.loginform.value)
  this.router.navigate(['dashboard'])
  }

}
