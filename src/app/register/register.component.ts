import { Component, OnInit } from '@angular/core';
import { BookserviceService } from '../bookservice.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
database:any={};
database1:any;
  constructor(private DBL:BookserviceService) { }

  ngOnInit(): void {
  }
  create(name:any,email:any){
    this.database={name,email};
    this.database1=JSON.stringify(this.database);
   localStorage.setItem(email,this.database1)
  }
  msgs=[]

  send(msg:any){

     this.msgs=this.DBL.chat(msg);

  }

}
