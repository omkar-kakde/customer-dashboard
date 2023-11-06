import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Icustomer } from '../../module/customer';
import { CustomerService } from '../../service/customer.service';

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.scss']
})
export class CustomerViewComponent implements OnInit {

  viewId !: number;
  viewObj !: Icustomer;
  constructor(private activate: ActivatedRoute,
    private router: Router,
    private service: CustomerService
  ) { }

  ngOnInit(): void {

    this.activate.params
      .subscribe(

        (id: Params) => {
          this.viewId = +id['id']
          console.log(this.viewId);

        }
      )

    this.viewObj = this.service.getSingleCustomer(this.viewId)!

    console.log(this.viewObj);
  }

  gotodash(){
    this.router.navigate(['/dashboard'])
  }

}
