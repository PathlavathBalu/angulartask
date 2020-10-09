import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

public historyData:any;

constructor(private orderService:OrderService) { }

  ngOnInit(): void {
    this.orderService.createOrderList().subscribe((result) => {
      this.historyData = result;
      console.log(this.historyData);
    })
  }

}



// createOrderList(person: Person): Observable<any> {
//   const headers = { 'content-type': 'application/json' }
//   const body = JSON.stringify(person);
//   this.http.post<any>(this.Url + 'people', body, { 'headers': headers, observe: 'response' })
//     .subscribe(
//       response => {
//         console.log("POST completed sucessfully. The response received " + response);
//       },
//       error => {
//         console.log("Post failed with the errors");
//       },
//       () => {
//         console.log("Post Completed");
//       },
//     )}
