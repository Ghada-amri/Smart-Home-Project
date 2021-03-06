import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { MonPremierComponent } from './mon-premier/mon-premier.component';
import { AppareilComponent } from './appareil/appareil.component';
import { FormsModule } from '@angular/forms';

import {AppareilService} from './services/appareil.service';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import {AuthService} from './services/auth.service';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';


const appRoutes: Routes = [
  { path: 'appareils', component: AppareilViewComponent },
  { path: 'appareils/:id', component: AppareilViewComponent /*SingleAppareilComponent*/ },
  { path: 'auth', component: AuthComponent },
  { path: '', component: AppareilViewComponent }
];

@NgModule({
  declarations: [

    AppComponent,
    MonPremierComponent,
    AppareilComponent,
    AuthComponent,
    AppareilViewComponent,
    SingleAppareilComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AppareilService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
