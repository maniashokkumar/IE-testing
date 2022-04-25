import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookserviceService {
pnr1:any;
pnr2:any;
total_Amount=0;
passenger_Details:any


  constructor() { }
  pnrgen1(pnr2:any){
 
    this.pnr2=pnr2;

  }
  pnrgen(pnr:any){
    this.pnr1=pnr;
    

  }

  msgs:any;

  chatMsg:any=[];



  chat(msg:any){

     this.chatMsg.push(msg)

     return this.chatMsg;

  }
  amount(value:any){
    if(value<=10){
      this.total_Amount=this.total_Amount+1500;
    }
    else{
      this.total_Amount=this.total_Amount+1000;
    }
  
    console.log(this.total_Amount)
  }
  details(passenger_details:any){
    this.passenger_Details=passenger_details;
  }
}
