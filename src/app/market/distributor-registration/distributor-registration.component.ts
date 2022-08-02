import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormControl,FormGroup,Validators,} from "@angular/forms";
import { DistributorService } from 'src/app/service/distributor.service';
@Component({
  selector: 'app-distributor-registration',
  templateUrl: './distributor-registration.component.html',
  styleUrls: ['./distributor-registration.component.scss']
})
export class DistributorRegistrationComponent implements OnInit {

  form!: FormGroup;
  datas!: any;

  constructor( private fb: FormBuilder, private distributorService: DistributorService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      firstname: ["", [Validators.required,  Validators.maxLength(50)]],
      lastname: ["", [Validators.required,  Validators.maxLength(50)]],
      dateofbirth: ["", [Validators.required]],
      gender: ["", [Validators.required]],
      identity: this.fb.group({
        type: ["", [Validators.required]],
        seria: ["", [Validators.maxLength(10)]],
        number: ["", [Validators.maxLength(10)]],
        releasedate: ["", [Validators.required]],
        term: ["", [Validators.required]],
        personalnumber: ["", [Validators.required,  Validators.maxLength(50)]],
        issuingagency: ["", [ Validators.maxLength(100)]],
      }),
      contact: ['', [Validators.required,  Validators.maxLength(100)]],
      address: ['', [Validators.required,  Validators.maxLength(100)]],
      recommender: [''],
    });

    this.getDistributor()
  }

  getDistributor(){
    this.distributorService.subject.subscribe(res=> {this.datas = res, console.log(res)})
  
  }

  
  search(){
    this.distributorService.search()
  }

  
  submit() {
    this.distributorService.create(this.form.value)
    this.search()
    this.form.reset()
    console.log(this.form.value)
  }

}
