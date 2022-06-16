import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { InteractionService } from '../../services/interaction.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  credenciales = {
    correo: null,
    password: null,
  }


  constructor( private auth: AuthService,
    private interaccion: InteractionService,
    private router: Router ) { }

  ngOnInit() {}


  async login(){
    await this.interaccion.presentLoading('Cargando...');
     console.log('credenciales ->', this.credenciales);
    const res = await this.auth.login(this.credenciales.correo, this.credenciales.password).catch(error => {
       console.log("error")
       this.interaccion.closeLoading();
       this.interaccion.presentToast('Usuario o Contraseña invalido');
    } )
    if (res) {
     console.log('res ->', res)
     this.interaccion.closeLoading();
     this.interaccion.presentToast('Ingresado con exito');
     this.router.navigate(['/home'])
    }
   }
 
   
   registrarse(){
 
   }


}
