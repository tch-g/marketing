import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DistributorSalesService } from 'src/app/service/distributor-sales.service';
import { DistributorService } from 'src/app/service/distributor.service';

@Component({
  selector: 'app-distributor-sales',
  templateUrl: './distributor-sales.component.html',
  styleUrls: ['./distributor-sales.component.scss']
})
export class DistributorSalesComponent implements OnInit {

  form!: FormGroup;
  datas: any

  constructor(private fb: FormBuilder, private router: Router, private salesService: DistributorSalesService, private distributorService: DistributorService) { }

  ngOnInit(): void {
    this.getDistributor()
    this.search()
    this.form = this.fb.group({
      firstname: ["", [Validators.required]],
      saledate: ["", [Validators.required]],
      code: ["", [Validators.required]],
      quantity: ["", [Validators.required]],
      price: ["", [Validators.required]],
      totalprice: ["", [Validators.required]],
    });
  
  }
  
  submit() {
    this.salesService.create(this.form.value)
    this.form.reset()
    this.search()
    console.log(this.form.value)
  }

  getDistributor(){
    this.distributorService.subject.subscribe(res=> {this.datas = res;})
  }

  search(){
    this.distributorService.search()
  }

  goToProduct(){
    this.router.navigate(['product-registration'])
  }

  goToDistributor(){
    this.router.navigate(['distributor-registration'])
  }

 

}
