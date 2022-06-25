import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';


@Injectable({
  providedIn: 'root'
})
export class FirestorageService {

  constructor(public fireStorage: AngularFireStorage) { }

  openImage(){
      return new Promise( resolve =>{
        setTimeout(() =>{
          resolve(true);
            console.log("sii");
            return; 
        }, 2000);
      })
  }
}
