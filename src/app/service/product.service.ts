import { Injectable, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})

export class ProductService implements OnInit {
  _url = "http://localhost:3000";
 
  constructor(private http: HttpClient) {}

  create(product: any): void {
    this.http.post(`${this._url}/product`, product).subscribe(res => console.log(res))
 }

 getProduct(): Observable<any> {
  return this.http.get(`${this._url}/product`)
}

  ngOnInit(): void {}
 
}