import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  Url ="https://www.deveposhybrid.uk/index.php/customerServices/RestaurantDetails?auth_code=DCALYY";
  constructor(private _http:HttpClient) { }
  getOrderList() {
    return this._http.get(this.Url);
    console.log("This method is worked")
  }
}
