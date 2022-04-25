import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookserviceService } from '../bookservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user:any;
user1:any;
pnr: any;
  constructor(private router:Router,private ser:BookserviceService) { }

  ngOnInit(): void {
  }
  login(name:any,email:any){
      this.user=localStorage.getItem(email);
      this.user1=JSON.parse(this.user);
    if(email==this.user1.email){
      this.router.navigateByUrl("selectseat");
      alert("Logged In Successfull"+name);
      this.pnr=Math.floor(1000000000+Math.random()*9000000000);
      this.ser.pnrgen(this.pnr)
    }
    else{
      alert("Invalid user")
    }
      
}
}