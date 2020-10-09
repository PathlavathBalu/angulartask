import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http:HttpClient) { }

  getOrderList() {
    let Url ="https://www.deveposhybrid.uk/index.php/customerServices/RestaurantDetails?auth_code=DCALYY";
    console.log(Url);
    return this.http.get(Url);
    
  }

}
