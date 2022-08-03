import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-distributor-sales',
  templateUrl: './distributor-sales.component.html',
  styleUrls: ['./distributor-sales.component.scss']
})
export class DistributorSalesComponent implements OnInit {

  constructor(private fb: FormBuilder, private router: Router) { }

  goToProduct(){
    this.router.navigate(['product-registration'])
  }

  goToDistributor(){
    this.router.navigate(['distributor-registration'])
  }

  ngOnInit(): void {
  }

}
