import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public collection:any;
  constructor(private contactService:ContactService) { }

  ngOnInit(): void {
    this.contactService.getOrderList().subscribe((result) => {
      this.collection = result;
      console.log(this.collection);
    });
  }


}
