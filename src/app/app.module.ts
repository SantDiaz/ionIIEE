import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, Router, RouterModule } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment.prod';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { CardsPage } from './pages/cards/cards.page';
import { RegistroComponent } from './pages/registro/registro.component';
import { HomePage } from './home/home.page';
import { LoginComponent } from './pages/login/login.component';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './pages/menu/menu.component';
import { AdminComponent } from './pages/admin/admin.component';
import { TareasComponent } from './pages/tareas/tareas.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    HomePage,
    CardsPage,
    MenuComponent,
    AdminComponent,
    TareasComponent,
    ],
  entryComponents: [],

  imports: [BrowserModule,
  IonicModule.forRoot(), 
  AppRoutingModule,
  HttpClientModule,
  FormsModule,
  AngularFireModule.initializeApp(environment.firebaseConfig),
  AngularFireAuthModule,
  AngularFirestoreModule,
  


  
],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
