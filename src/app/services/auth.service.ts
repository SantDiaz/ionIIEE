import { Injectable } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/compat/auth';
import { UserI } from '../models/models';
import { IonicRouteStrategy } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private authFirebase: AngularFireAuth,
              private firestore: AngularFirestore ) { }

  login(correo: string, password: string){
    // return  this.authFirebase.signInWithEmailAndPassword(correo, password)
    return this.authFirebase.signInWithEmailAndPassword(correo, password);
  }

  logout(){
    this.authFirebase.signOut()
  }
    registrarUser(datosUser: UserI){
    return  this.authFirebase.createUserWithEmailAndPassword(datosUser.correo, datosUser.password)
    }

    stateUser(){
      return this.authFirebase.authState
    }
    getId() {
      return this.firestore.createId();
    }
  
    getCollection<UserI>(path: string) {

      const collection = this.firestore.collection<UserI>(path);
      return collection.valueChanges();
  
    }
}
