import { Component, OnInit } from '@angular/core';
import { UserI } from '../../models/models';
import { AuthService } from '../../services/auth.service';
import { FirestoreService } from '../../services/firestore.service';
import { InteractionService } from '../../services/interaction.service';
import { Router } from '@angular/router';
// import { AngularFirestore } from '@angular/fire/compat/firestore';



@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent implements OnInit {

  marcar: UserI[]=[];

    datosUser : UserI = {
      nombre: null,
      apellido: null,
      correo: null,
      uid: null,
      password: null,
      perfil: 'visitante',
    }

  constructor( private auth: AuthService,
              private firestore: FirestoreService,
              // private firestore: AngularFirestore,
              private db: FirestoreService,
              private interaction: InteractionService,
              private router: Router) { }

  ngOnInit() {}
  
  async registrar(){
    this.interaction.presentLoading('Registrando...')
    const res= await  this.auth.registrarUser(this.datosUser).catch(error => {
        this.interaction.closeLoading();
        this.interaction.presentToast('Error, por favor reintente')
        console.log('ERROR');
      })
      if(res){
        // console.log('U exito');
        const path = 'usuarios';
        const id = res.user.uid;
        this.datosUser.uid=id;
        this.datosUser.password=null;
        this.interaction.closeLoading();
        this.interaction.presentToast('Registrado con exito');
        this.router.navigate(['/home']);
    await this.firestore.createDoc(this.datosUser, path, id);
        this.interaction.presentToast('Registrado con exito');
      }
  }

  loadRegister(){ 
    const path = 'marcar';
    this.db.getCollection<UserI>(path).subscribe( res => {
      if(res){
        this.marcar = res; 
      }
    })
  }

  // async IngresarConGoogle(){
  //   const{ email, pass } = this.datosUser.value;
  //   try {
  //     const user = this.auth.loginWithGoogle;
      
            
  //     if (user){
  //       localStorage.setItem('usuario', JSON.stringify(user.user))
  //       this.router.navigate(['/Inicio']);
  //     } 
  //    } catch (err){
  //      console.log(err)
  //    } 
  // }
}
