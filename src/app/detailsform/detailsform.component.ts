import { Component, OnInit } from '@angular/core';
import { BookserviceService } from '../bookservice.service';

@Component({
  selector: 'app-detailsform',
  templateUrl: './detailsform.component.html',
  styleUrls: ['./detailsform.component.css']
})
export class DetailsformComponent implements OnInit {

  constructor(private ser:BookserviceService) { }
details:any;
det:any;
pnr:any;
passanger:any;
boarding:any;
age:any;
phone:any;
gender:any;
amount:any;
seatno=[];



  ngOnInit(): void {
   let a= this.ser.pnr2;
   this.details=localStorage.getItem(a);
  this.pnr=this.details.age;
  this.det=JSON.parse(this.details);
   this.pnr=(this.det.PNR);
   this.passanger=(this.det.passenger);
   this.boarding=this.det.boarding;
   this.age=this.det.age;
   this.phone=this.det.phone;
   this.gender=this.det.gender;
   this.amount=this.det.amt;
   this.seatno=this.det.SelectedSeat.split(" ");
   console.log((this.seatno));
   
  }


}
