import { Component, OnInit } from '@angular/core';
import { UserI } from '../../models/models';
import { AuthService } from '../../services/auth.service';
import { FirestoreService } from '../../services/firestore.service';
import { InteractionService } from '../../services/interaction.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent implements OnInit {


    datosUser : UserI = {
      nombre: null,
      apellido: null,
      correo: null,
      uid: null,
      password: null,
      perfil: 'usuario',
    }

  constructor( private auth: AuthService,
              private firestore: FirestoreService,
              private interaction: InteractionService,
              private router: Router) { }

  ngOnInit() {}
  
  async registrar(){
    this.interaction.presentLoading('Registrando...')
    console.log("dasda", this.datosUser);
    const res= await  this.auth.registrarUser(this.datosUser).catch(error => {
        this.interaction.closeLoading();
        this.interaction.presentToast('Error, por favor reintente')
        console.log('ERROR');
      })
      if(res){
        // console.log('U exito');
        const path = 'Usuarios';
        const id = res.user.uid;
        this.datosUser.uid=id;
        this.datosUser.password=null;
        this.interaction.closeLoading();
        this.interaction.presentToast('Registrado con exito');
        this.router.navigate(['/home']);
    // await this.firestore.createDoc(this.datosUser, path, id);
 
    //     this.interaction.presentToast('Registrado con exito');
      }
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
