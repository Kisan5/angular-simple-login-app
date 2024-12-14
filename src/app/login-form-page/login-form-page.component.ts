import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-form-page',
  standalone: true,
  imports: [FormsModule], 
  //kisan: 1. As this is a standalone component so if you import modules in app component also that can not be accessed from this component as this is a separate standalone component which need to have all the dependencies and all with itself to run independently. incase of old versions like angular 13 etc those were not standalone components so in top level like in app component if you import then can be used every where inside that components created in app module. Note- if this ngModel used inside anyother component html file for e.g. app component -> app.component.html file there it needs to be imported in app.component.ts file in this latest angualar standalone component version.
  //2. here we need to import formsModule to use ngModel and others in this component only
  templateUrl: './login-form-page.component.html', //kisan: This shows the html file of this component.
  styleUrl: './login-form-page.component.css' //kisan: this shows the css file of this component.
})
export class LoginFormPageComponent {
  userName : String; //kisan: AS part of typeScript provided datatype of this variable. note: can ignore the data type here also check typescript once for more information
  password : String;

  constructor(){
    this.userName="";
    this.password="";
  }
  login():void{ //kisan: As part of typeScript provided the return type of this function as void.
    if(this.userName==="kisan@gmail.com" && this.password==="12345"){
      alert("Login Successful.");
    }
    else{
      alert("Please enter correct credentials.");
    }
  }

}
