import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { SelectSeatComponent } from './select-seat/select-seat.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CheckpnrComponent } from './checkpnr/checkpnr.component';
import { DetailsformComponent } from './detailsform/detailsform.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    SelectSeatComponent,
    NavigationComponent,
    CheckpnrComponent,
    DetailsformComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
