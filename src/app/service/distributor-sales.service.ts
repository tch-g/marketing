import { Injectable, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})

export class DistributorSalesService implements OnInit {
  _url = "http://localhost:3000";
 
  constructor(private http: HttpClient) {}

  create(sales: any): void {
    this.http.post(`${this._url}/sales`, sales).subscribe(res => console.log(res))
 }

 getProduct(): Observable<any> {
  return this.http.get(`${this._url}/sales`)
}

  ngOnInit(): void {}
 
}