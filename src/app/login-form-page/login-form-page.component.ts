import {HttpClient} from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-form-page',
  standalone: true,
  // imports: [FormsModule,HttpClient], imports: [FormsModule,HttpClientModule], kisan: in Angular 18 and latest cant use the httpClients import here like this so need to call the provideHttpClient(),() function in providers[] in app.config.ts.
  imports: [FormsModule],
  //kisan: 1. As this is a standalone component so if you import modules in app component also that can not be accessed from this component as this is a separate standalone component which need to have all the dependencies and all with itself to run independently. incase of old versions like angular 13 etc those were not standalone components so in top level like in app component if you import then can be used every where inside that components created in app module. Note- if this ngModel used inside anyother component html file for e.g. app component -> app.component.html file there it needs to be imported in app.component.ts file in this latest angualar standalone component version.
  //2. here we need to import formsModule to use ngModel and others in this component only
  templateUrl: './login-form-page.component.html', //kisan: This shows the html file of this component.
  styleUrl: './login-form-page.component.css', //kisan: this shows the css file of this component.
})
export class LoginFormPageComponent {
  userName: String; 
  //kisan: AS part of typeScript provided datatype of this variable. note: can ignore the data type here also check typescript once for more information
  password: String;

  http: HttpClient;
  responsedUsersArray: any; 
  //kisan: any variable no need to be initialized, but if it is other specific type then error will be thrown to initialize it. This rule is for strict=true in tsconfig.json

  // validUser!:boolean; //kisan: in strict mode if dont want to initialize then use this !: (bang colon-means non-null and non-undefined) and check for ?: also. 
  validUser:boolean;

  constructor(http: HttpClient) { //kisan: here we have done constructor injection to get httpclient object
    this.http = http;
    this.userName = '';
    this.password = '';
    this.getUsers();
    this.validUser=false;
  }

  login(): void {
    //kisan: way 1 - traversing through forEach, but the issue is we cant stop the loop if the desired result found
    //kisan: As part of typeScript provided the return type of this function as void.
    // this.responsedUsersArray.forEach((item: any) => {
    //   console.log(item);
    //   //kisan: in this we need to provide the type any otherwise error may be because of strict type.
    //   if (this.userName === item.email && this.password === item.pass) {
    //     this.validUser=true;
    //     return; // not working to break the loop
    //   }
    //   else{
    //     this.validUser=false;
    //     return; // not working to break the loop
    //   }
    // });
    //kisan: imp note-  forEach can only be called on the arrays but in case of objects forEach will not work need to use different wat like for(let x of etc){} need to check

    //kisan: way 2 - using some() - This is a alternative of forEach which is same but can break the loop inbetween if one of the condition is true and returned true value once.
    this.responsedUsersArray.some((item: any):boolean => {
      if(this.userName === item.email && this.password === item.pass){
        this.validUser=true;
        //resetting the values if successfully logged in
        this.userName="";
        this.password="";
        return true; //kisan: this is used to break the loop. once this statement condition hit then the loop will stop
      }else{
        this.validUser=false;
        return false; //kisan: this is used to continue the loop forward. for this false return the loop will not stop
      }
    });
    
    //kisan: way 3- used for(let of) loop - here also break and return not working need to check
    // for(let x of this.responsedUsersArray){
    //   console.log(x);
    //   if(this.userName === x.email && this.password === x.pass){
        
    //     return;
    //   }
    // }

    if(this.validUser==true){
      alert('Login Successful.');
    }
    else{
      alert('Please enter correct credentials.');
    }
    
  }

  getUsers(): void {
    // this calls the api and gets all user details and sets it and so no return type.
    // console.log(this.http.get("http://localhost:3000/users").subscribe(item=> console.log(item))); // kisan: incase of subscribe if you think like adding console outside to see the values, it wont work as it will print some definations of http or get etc. but if you put console inside then can see the values. Also item is the data you directly get when you hit the url. so if it is a single user data then one user details will come as json and if it is a array of users then that array will come directly so need to check it first.
    this.http.get('http://localhost:3000/users').subscribe((item) => {
      this.responsedUsersArray = item;
    });
  }
}
