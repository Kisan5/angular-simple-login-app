import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginFormPageComponent } from './login-form-page/login-form-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet], //kisan: here the components to be declared which is directly used in this component html part. i.e. if in this app.component.html we are directly using <app-login-form-page> selector for the "login-form-page"component then need to declare the component here AND if the component is loaded based on the routes by <router-outlet> then the component needs to be imported in the paticular routes file(app.routes.ts) file to use in there.
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-simple-login-app';
}
