import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { InteractionService } from '../services/interaction.service';
import { FirestoreService } from '../services/firestore.service';

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
      titulo: 'Poblacion',
      valor: '46.234.830',
      tiempo: 'Estimacion 2022',
      url: 'https://www.indec.gob.ar/uploads/informesdeprensa/mercado_trabajo_eph_4trim211A57838DEC.pdf',
    },
    {
      img:  '../../assets/icons/icon2Grande.svg ',
      titulo: 'Tasa de desocupacion',
      valor: '7,0%',
      tiempo: 'Cuatro trimestre 2021',
      url: 'https://www.indec.gob.ar/uploads/informesdeprensa/mercado_trabajo_eph_4trim211A57838DEC.pdf',
    },
    {
      img:  '../../assets/icons/icon2Grande.svg ',
      titulo: 'Precio al consumidor',
      valor: '5,1%',
      tiempo: 'Mayo 2022',
      url: 'https://www.indec.gob.ar/uploads/informesdeprensa/mercado_trabajo_eph_4trim211A57838DEC.pdf',
    },
    {
      img:  '../../assets/icons/icon2Grande.svg ',
      titulo: 'Indice de produccion industrial manufacturero',
      valor: '5,0%',
      tiempo: 'Abril 2022',
      url: 'https://www.indec.gob.ar/uploads/informesdeprensa/mercado_trabajo_eph_4trim211A57838DEC.pdf',
    },
    {
      img:  '../../assets/icons/iconPequeño.svg ',
      titulo: 'Estimador mensual de actividad economica',
      valor: '-0,7%',
      tiempo: 'Marzo 2022',
      url: 'https://www.indec.gob.ar/uploads/informesdeprensa/mercado_trabajo_eph_4trim211A57838DEC.pdf',
    },
  ]

  constructor(private menuCtrl: MenuController,
              private auth: AuthService,
              private interaction: InteractionService,
              private db: FirestoreService,
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