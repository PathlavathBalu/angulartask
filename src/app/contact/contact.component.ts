import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  collection: any;
  delivareTime: string;
  lat: any;
  lng : any;
  workingHours: any;
  address1:any;
  extraNotes:any;
  constructor(private contactService:ContactService) { }

  ngOnInit(): void {
    this.contactService.getOrderList().subscribe((result) => {
      this.collection = result;
      this.delivareTime = this.collection.rest_details.DeliveryTime;
      this.lat = this.collection.rest_details.latitude;
      this.lng = this.collection.rest_details.langitude;
      this.address1 = this.collection.rest_details.address1;
      this.workingHours = this.collection.rest_details.workingHours;
      this.extraNotes = this.collection.rest_details.extraNotes;
      console.log(this.collection);
    });
  }

 

}
