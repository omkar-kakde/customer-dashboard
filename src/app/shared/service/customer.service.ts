
import { Injectable } from '@angular/core';
import { Icustomer } from '../module/customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() { }

  
    customers: Array<Icustomer> = [
      {
        "id": 1,
        "first_name": "Ann",
        "last_name": "Smith",
        "email": "ann@codingthesmartway.com",
        "phone_no" : 8830643432
      },
      {
        "id": 2,
        "first_name": "will",
        "last_name": "willim",
        "email": "ann@codingthesmartway.com",
        "phone_no" : 8830543434
      },
      {
        "id": 3,
        "first_name": "jen",
        "last_name": "lokas",
        "email": "ann@codingthesmartway.com",
        "phone_no" : 8840643432
      },
      {
        "id": 4,
        "first_name": "pill",
        "last_name": "wilim",
        "email": "ann@codingthesmartway.com",
        "phone_no" : 8830643434
      },
      {
        "id": 5,
        "first_name": "will",
        "last_name": "smile",
        "email": "ann@codingthesmartway.com",
        "phone_no" : 8830643434
      },
      {
        "id": 6,
        "first_name": "Ann",
        "last_name": "jill",
        "email": "ann@codingthesmartway.com",
        "phone_no" : 8830643432
      },
      {
        "id": 7,
        "first_name": "Ann",
        "last_name": "jill",
        "email": "ann@codingthesmartway.com",
        "phone_no" : 8830643432
      },
      {
        "id": 8,
        "first_name": "jim",
        "last_name": "Smith",
        "email": "ann@codingthesmartway.com",
        "phone_no" : 8830643432
      },
      {
        "id": 9,
        "first_name": "Ann",
        "last_name": "Smith",
        "email": "ann@codingthesmartway.com",
        "phone_no" : 8830643432
      }
    ]


    
    getAllData() {
      return this.customers
    }
  
 
    
   create(obj : any){ 
    console.log("test1");
    console.log(obj);
     this.customers.push(obj);
    console.log(this.customers);
  
  }


  delete(id:number){
    const newArray = this.customers.filter(item => item.id !== id);
    this.customers = newArray;
    console.log("Testing Akshay");
    console.log(id);
    console.log(this.customers);
        
  }

  update(obj:Icustomer){
        this.customers.forEach((ele)=>{
          if(ele.id === obj.id){
            ele.first_name = obj.first_name,
            ele.last_name = obj.last_name,
            ele.phone_no = obj.phone_no,
            ele.email = obj.email
          }
        })
 

        


  }


  getSingleCustomer(id:Number){
     return  this.customers.find((ele) => ele.id === id);
     
  }

  
  

  }

