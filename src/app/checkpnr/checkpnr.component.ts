import { Component, OnInit } from '@angular/core';
import { BookserviceService } from '../bookservice.service';

@Component({
  selector: 'app-checkpnr',
  templateUrl: './checkpnr.component.html',
  styleUrls: ['./checkpnr.component.css']
})
export class CheckpnrComponent implements OnInit {
  doj: any;
  d: any;

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
del1=[]
  ngOnInit(): void {
  }
  check(pnr:any,doj1:any){
    let pnr1=String(pnr)+String(doj1)
    this.details=localStorage.getItem(pnr1);
    this.det=JSON.parse(this.details);
   this.pnr=(this.det.PNR);
   this.passanger=(this.det.passenger);
   this.boarding=this.det.boarding;
   this.age=this.det.age;
   this.doj=this.det.doj;
  
   this.phone=this.det.phone;
   this.gender=this.det.gender;
   this.amount=this.det.amt;
   this.d=this.det.SelectedSeat.split(" ");
   let a=localStorage.getItem(pnr1)
   if(a==null){
     return
   }
   var del=JSON.parse(a);
    this.del1=(del.SelectedSeat).split();
   
   

    
  }
  cancel(pnr:any,doj1:any)
      {
      
        var total=localStorage.getItem("id");
        if(total==null){
          return
        }
        var total1=JSON.parse(total)
        for(let i=0;i<=this.del1.length;i++){
          for(let j=0;j<=total1.length;j++){
            if(this.del1[i]==total1[j]){
              alert("hi")
            }
          }
        }
        let pnr1=String(pnr)+String(doj1);
        localStorage.removeItem(pnr1);
      
        
      }
}
