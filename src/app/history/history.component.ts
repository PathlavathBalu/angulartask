import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
public collection:any;
post = [];
  constructor(private orderService:OrderService) { }

  ngOnInit(): void {
    this.orderService.createOrderList(this.post).subscribe((result) => {
      this.collection = result;
      console.log(this.collection);
    })
  }

}
