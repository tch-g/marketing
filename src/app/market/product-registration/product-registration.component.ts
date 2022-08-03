import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-registration',
  templateUrl: './product-registration.component.html',
  styleUrls: ['./product-registration.component.scss']
})
export class ProductRegistrationComponent implements OnInit {

  form!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private productService: ProductService) { }

  goToDistributor(){
    this.router.navigate(['distributor-registration'])
  }

  goToSales(){this.router.navigate(['distributor-sales'])}

  ngOnInit(): void {
    this.form = this.fb.group({
      code: ["", [Validators.required]],
      productname: ["", [Validators.required]],
      price: ["", [Validators.required]],
    });
  }


  submit() {
    this.productService.create(this.form.value)
    this.form.reset()
    console.log(this.form.value)
  }



}
