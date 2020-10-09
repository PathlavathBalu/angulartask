import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  collection: any;
  companyName: string;
  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.contactService.getOrderList().subscribe((result) => {
      this.collection = result;
      this.companyName = this.collection.rest_details.actual_restaurant_name;
    }
    )
  }
}

