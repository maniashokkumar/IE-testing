import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatserviceService {
  customermesg:any=[];
  Custo_mesg:any=[];
  Agent_mesg:any=[];
  a2cser:any;
  

 
  constructor() { 
    this.a2cser=[];

  }
  /* chat(customermesg:any){
    this.customermesg.push(customermesg);
    return this.customermesg;
  } */
  chat(mesgfrmcus:any){
    this.Custo_mesg.push(mesgfrmcus);
  
    
  }
  chat1(mesgfrmagnt:any){
    this.Agent_mesg.push(mesgfrmagnt);
    
    
   
  
  }
  a2cmesg(temarr:any){
    this.a2cser=temarr
  }
}
