import { Injectable, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})

export class ProductService implements OnInit {
  _url = "http://localhost:3000";

  subject = new BehaviorSubject<any>([]);
 
  constructor(private http: HttpClient) {}

  create(product: any): void {
    this.http.post(`${this._url}/product`, product).subscribe(res => console.log(res))
 }

 getProduct(): Observable<any> {
  return this.http.get(`${this._url}/product`)
}

findPorduct(id: any): Observable<any>{
  return this.http.get(`${this._url}/product/${id}`)
}

search(){
  this.getProduct().subscribe(res => { this.subject.next(res) })
  }


  getSubject(): Observable<any>{
    return this.subject.asObservable()
    }
    
  ngOnInit(): void {}
 
}