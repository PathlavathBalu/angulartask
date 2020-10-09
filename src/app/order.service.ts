import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs/observable';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class OrderService {
  Url ="https://www.eposhybrid.uk/index.php/customerServices/completeOrders_v2";

  constructor(private http:HttpClient) { }

  createOrderList(): Observable<any> {

    let objData = {
      auth_code: "DCALYY",
      customer_id: "MC_DCALYY_489389011583419358",
      status: 3
    }

   //let httpHeaders = new HttpHeaders().set('Content-type', 'application/json');

    // let options = {
    //   headers: HttpHeaders
    // }
    
    const headers = new HttpHeaders({'Content-type':'application/json'});
    console.log(this.Url, objData);
return this.http.post(this.Url, JSON.stringify(objData));
    //return this.http.post(this.Url, JSON.stringify(objData), options);
  }

}






// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// // import { Observable } from 'rxjs/observable';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })

// export class OrderService {
//   Url ="https://www.eposhybrid.uk/index.php/customerServices/completeOrders_v2";

//   constructor(private http:HttpClient) { }

//   createOrderList(): Observable<any> {

//     let objData = {
//       auth_code: "DCALYY",
//       customer_id: "MC_DCALYY_489389011583419358",
//       status: 3
//     }

//     let httpHeaders = new HttpHeaders().set('Content-type', 'application/json');

//     let options = {
//       headers: httpHeaders
//     }
//     console.log('this.http.post(this.Url, objData, options)', this.http.post(this.Url, objData, options));
//     return this.http.post(this.Url, objData, options);
//   }

// }
