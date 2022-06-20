import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { InteractionService } from '../services/interaction.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  login: boolean = false;


  slides  = [
    {
      img:  '../../assets/icons/icon2Grande.svg',
      titulo: 'PGB <br> Producto bruto interno',
    },
    {
      img:  '../../assets/icons/iconPequeño.svg ',
      titulo: 'Indice de precio <br> al consumidor',
    },
    {
      img:  '../../assets/icons/icon2Pequeño.svg ',
      titulo: 'Indice de precio <br> al consumidor',
    },
  ]

  constructor(private menuCtrl: MenuController,
              private auth: AuthService,
              private interaction: InteractionService,
              private router: Router) {
                        this.auth.stateUser().subscribe( res => {
                          if (res){
                              console.log("logueado");
                              this.login=true;
                          }else {
                            console.log("no esta logueado");
                            this.login=false;
                          }
                        });

              }

     
ngOnInit(){

}

menuOption(){
    this.menuCtrl.toggle();
}

logout(){
  this.auth.logout()
  this.interaction.presentToast('Sesion Finalizada');
      this.router.navigate(['/login'])
}





}