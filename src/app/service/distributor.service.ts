import { Injectable, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

interface Distributor {
  name: string;

}


@Injectable({
  providedIn: "root",
})

export class DistributorService implements OnInit {
  _url = "http://localhost:3000";
 
  constructor(private http: HttpClient) {}

  create(user: any): Observable<any> {
    return this.http.post<any>("http://localhost:3000/distributor",user);
  }

  ngOnInit(): void {}
 
}