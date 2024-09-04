import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';
import { HomeComponent } from './app/home/home.component'; // Example components
const routes: Routes = [
  { path: '', component: AppComponent },
  
  // other routes
];
//Bootstrap: You use bootstrapApplication instead of having a root NgModule to bootstrap the app.
bootstrapApplication(AppComponent, 
  {
    providers: [provideRouter(routes)]
  }
)
  .catch((err) => console.error(err));
