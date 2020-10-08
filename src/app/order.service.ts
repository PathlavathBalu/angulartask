import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
 Url ="https://www.eposhybrid.uk/index.php/customerServices/completeOrders_v2";
  constructor(private _http:HttpClient) { }
  createOrderList(post) {
    return this._http.post(this.Url, JSON.stringify(post));
    console.log("This method is worked")
  }
}
