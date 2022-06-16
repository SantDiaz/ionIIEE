import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ComponentModule } from './component/component.module';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment.prod';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { CardsPage } from './pages/cards/cards.page';
import { RegistroComponent } from './pages/registro/registro.component';
import { HomePage } from './home/home.page';
import { SlideHomePage } from './pages/slide-home/slide-home.page';
import { LoginComponent } from './pages/login/login.component';
import { SlideComponent } from './pages/slide/slide.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SlideHomePage,
    RegistroComponent,
    HomePage,
    CardsPage,
    SlideComponent
    ],
  entryComponents: [],

  imports: [BrowserModule,
  IonicModule.forRoot(), 
  AppRoutingModule,
  ComponentModule,
  HttpClientModule,
  AngularFireModule.initializeApp(environment.firebaseConfig),
  AngularFireAuthModule,
  AngularFirestoreModule,
  


  
],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
