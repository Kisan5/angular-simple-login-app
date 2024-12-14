import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';

/* 
  kisan: app.component.ts for imports of components and modules
  app.config.ts for mentioning service classes like HttpClient to get objects
  app.routes.ts for defining routes
*/

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(), provideHttpClient()]
  /*kisan:
    1. In these latest Angular 18 and above-
       a. app.component.ts for imports of components and modules in this.
       b. app.config.ts for mentioning service classes and others like providedHttpClient() for HttpClient object to be used in this module's components to get objects. 
       c. app.routes.ts for defining routes
    2. in previous versions like angular 13 we can use the HttpClientsModule in the imports to use it. but here if we do that in components(e.g. login-form-page / app.component etc.) import then it is throwing errors as it is deprecated so need to use this way to get it. To use HttpClient and solve nullInjector error need to add provideHttpClient() here to inject objects of httpclient. tried import in app.component.ts but not worked.
    3. links for HttpClient change- https://angular.dev/guide/http/setup, https://stackoverflow.com/questions/78430636/httpclientmodule-is-deprecated-in-angular-18-whats-the-replacement
  */

};
