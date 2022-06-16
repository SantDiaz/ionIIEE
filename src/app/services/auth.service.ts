import { Injectable } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private authFirebase: AngularFireAuth ) { }

  login(correo: string, password: string){
    return  this.authFirebase.signInWithEmailAndPassword(correo, password)
  }
  logout(){
    this.authFirebase.signOut()
  }

}
