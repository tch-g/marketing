import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { combineLatest, merge } from 'rxjs';
import { DistributorSalesService } from 'src/app/service/distributor-sales.service';
import { DistributorService } from 'src/app/service/distributor.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-distributor-sales',
  templateUrl: './distributor-sales.component.html',
  styleUrls: ['./distributor-sales.component.scss']
})
export class DistributorSalesComponent implements OnInit {

  form!: FormGroup;
  datas: any
  product: any
  price!: number
  quantity!: number
  total: any

  constructor(private fb: FormBuilder, private router: Router, private salesService: DistributorSalesService, private distributorService: DistributorService, private productService: ProductService ) { }

  ngOnInit(): void {
    this.getDistributor()
    this.search()
    this.getProduct()
    this.searchProduct()
    
    this.form = this.fb.group({
      firstname: ["", [Validators.required]],
      saledate: ["", [Validators.required]],
      code: ["", [Validators.required]],
      quantity: ["", [Validators.required]],
      price: ["", [Validators.required]],
      totalprice: ["", [Validators.required]],
    });
    this.sum()

  
  }

  sum(){
    const quantity = this.form.get('quantity')?.valueChanges.subscribe(val => this.quantity = val)
    const price = this.form.get('price')?.valueChanges.subscribe(value => this.price = value)
  this.total = this.quantity * this.price
  //  const sum = this.form.get('totalprice')?.setValue(+this.price * +this.quantity)
    // console.log(sum)
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
  getProduct(){
    this.productService.subject.subscribe(res => {this.product = res})
  }

  search(){
    this.distributorService.search()
  }

  searchProduct(){
    this.productService.search()
  }

  goToProduct(){
    this.router.navigate(['product-registration'])
  }

  goToDistributor(){
    this.router.navigate(['distributor-registration'])
  }

 

}
