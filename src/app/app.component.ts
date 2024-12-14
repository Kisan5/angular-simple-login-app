import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

/*
  kisan: app.module.ts is missing which is the file has declarations to declare component and imports modules , also bootstrap to start app where
  //https://stackoverflow.com/questions/77454741/why-doesnt-app-module-exist-in-angular-17
  //https://www.youtube.com/watch?v=0__SL3Vjif4
  //in this standlone app main.ts -> bootstrapApplication starts app and in this file imports-import component and module
  //where as in no standalone app different function called in main.ts and uses app.module.ts for starting and importing 
*/

/* 
  kisan: app.component.ts for imports of components and modules
  app.config.ts for mentioning service classes like HttpClient to get objects
  app.routes.ts for defining routes
*/

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet], 
  // kisan: here the components to be declared which is directly used in this component html part. i.e. if in this app.component.html we are directly using <app-login-form-page> selector for the "login-form-page"component then need to declare the component here AND if the component is loaded based on the routes by <router-outlet> then the component needs to be imported in the paticular routes file(app.routes.ts) file to use in there.
  /* 
    kisan: Here all the component (newly created also) and module used in app needs to be mentioned as it is a standlone true app
    rather we would have done in app.module.ts
    //kisan: here services needs not to be added as direct import statement works. here only component and modules added
  */
  // kisan: here services needs not to be added as direct import statement works. here only component and modules added
  // kisan: as in this app all are standalone components so if you import something in other component or app.component.ts also it will not come here so need to import here for this comp use
  // kisan: ReactiveFormsModule - this is use formGroup for forms
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-simple-login-app';
}
