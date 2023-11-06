import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CustomerService } from '../../service/customer.service';
import { Icustomer } from '../../module/customer';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.scss']
})
export class CustomerUpdateComponent implements OnInit {

  loginform = new FormGroup({
    id: new FormControl(),
    first_name: new FormControl(),
    last_name: new FormControl(),
    email: new FormControl(),
    phone_no: new FormControl()

  })
  customerId !: number;
  custmObj !: Icustomer;
  
  isGroupDisabled: boolean = false;
  constructor(private activate : ActivatedRoute,
        private  service : CustomerService,
        private router : Router
    ) { }

  ngOnInit(): void {
    this.activate.params
                .subscribe(

                  (id:Params) =>{
                     this.customerId  = +id['id']
                    console.log(this.customerId);
                    
                  }
                )

                this.custmObj = this.service.getSingleCustomer(this.customerId)!   
                console.log(this.custmObj);
                this.loginform.patchValue(this.custmObj)
  }   
  
  update(){
       let obj  : any ={
        ...this.loginform.value,

       }
       console.log(obj);
        this.service.update(obj)
       this.router.navigate(['dashboard'])
     }
     isDisabled = false;


     
     cancel(){
        this.router.navigate(['dasboard'])
     }

}
