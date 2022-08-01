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
  

  constructor( private fb: FormBuilder, private distributorService: DistributorService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [""],
     
    });
  }

  
  submit() {
    this.distributorService.create(this.form.value)
    console.log(this.form.value)
  }

}
