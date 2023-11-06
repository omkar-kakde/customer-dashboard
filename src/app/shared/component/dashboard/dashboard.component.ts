import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../service/customer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Icustomer } from '../../module/customer';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private service :CustomerService,
    private router : Router,
    private activate : ActivatedRoute
){}
userObj : Array<Icustomer> = [];
updateId !: number;

psize=5;
currentPage=1;

ngOnInit(): void {
 this.getCustomerData();

}

getCustomerData(){
 this.userObj = this.service.getAllData();
}


deleteById(id:number){
this.service.delete(id);
this.getCustomerData()
console.log(id);
}


adddata(){
    this.router.navigate(['/create'])
  }

  editById(id:number){
   this.router.navigate(['/update/'+ id])  
  }

  
  viewById(id:number){
    this.router.navigate(['/view/' + id])
  }

}
