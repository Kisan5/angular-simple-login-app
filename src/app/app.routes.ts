import { Routes } from '@angular/router';
import { LoginFormPageComponent } from './login-form-page/login-form-page.component';
//kisan: the components which will be loaded based on the routes needs to be imported here to be used in the routes []. but if the directly used in any component e.g. app.component.html then the declaration/import needs to be done in the imports[] in app.component.ts file.

export const routes: Routes = [
    {path:"",redirectTo:"login",pathMatch:'full'}, //kisan: this generic path if nothing provided then navigate to login page. i.e. localhost:****/ to localhost:****/login
    {path:"login",component:LoginFormPageComponent} //kisan: for localhost:****/login -> load "LoginFormPageComponent" in the <router-outlet> section in "<app-root> / app.component.html"
];
