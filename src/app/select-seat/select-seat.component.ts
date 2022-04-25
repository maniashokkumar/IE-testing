import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BookserviceService } from '../bookservice.service';

@Component({
  selector: 'app-select-seat',
  templateUrl: './select-seat.component.html',
  styleUrls: ['./select-seat.component.css']
})   
export class SelectSeatComponent implements OnInit {
 pnr:any;
seatno:any=[];
selectSeat:any;
amt=1500;
amt1=1000;
t:any
busseatid:any=[];
busseat:any=[];
total_amt=0;
passenger_details:any=[];
today=new Date();
pnr2="";
display:boolean=false;
booklen=0;
remaining=20;
z=0;



  constructor(private seatser:BookserviceService, private router:Router) { 
 
  }

  ngOnInit(): void {
    let exis=localStorage.getItem("id");
    if(exis==null){
      return
    }
    this.busseatid=exis.split(",");
    this.booklen=this.busseatid.length;
    console.log(this.busseatid);
     for(let i=0; i<this.busseatid.length;i++){
        console.log(this.busseatid[i]);
        this.t=document.getElementById(this.busseatid[i]);
        this.t.style.background="red"   };
      let x =localStorage.getItem("z");
      console.log(x);
      if(x==null){
        return
      }
      this.z=JSON.parse(x);
      this.remaining=this.remaining-this.z;
      
        }

    

    
    


  book(passenger:any,bordingpoint:any,age:any,phone:any,gender:any,amt:any,doj:any){
    this.pnr=this.seatser.pnr1
    this.selectSeat=JSON.stringify(this.seatno);
    console.log(this.selectSeat);
    
    localStorage.setItem(this.pnr,this.selectSeat);
  
    
    this.router.navigateByUrl("passengerdetails");
    this.passenger_details={passenger,bordingpoint,age,phone,gender,amt,PNR:this.seatser.pnr1, SelectedSeat:this.selectSeat,doj};
    this.seatser.details(this.passenger_details);
    this.pnr2=String(this.pnr)+String(doj);

    this.seatser.pnrgen1(this.pnr2);
    localStorage.setItem(this.pnr2,JSON.stringify(this.passenger_details));
    console.log(this.pnr2);
  
}



select(value:any,id:any){

  for(let j=0; j<this.busseatid.length;j++){
    console.log(j);
    console.log(typeof(this.busseatid[j]));
    
    if(id==this.busseatid[j]){
     
      alert("already booked");
      return
    }
  }
  if(this.seatno.length>=6){
    alert("Not more than 6 seat allowed to book");
    return
  }

  this.busseatid.push(id);
  let arr1=this.busseatid.toString();
  console.log(id);
 
  localStorage.setItem("id",arr1);
  this.t=document.getElementById(id);
   this.t.style.background="green";
   this.display=true;
   this.seatser.amount(value);
   this.total_amt=this.seatser.total_Amount;
   this.seatno.push(value);
  this.z++;
  localStorage.setItem("z",JSON.stringify(this.z));
  
}























}