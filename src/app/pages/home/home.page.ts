import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';
import { Router, RouterLinkWithHref } from '@angular/router';
import { InteractionService } from '../../services/interaction.service';
import { FirestoreService } from '../../services/firestore.service';
import { AsistenciaI, EquipoI, SlideI, UserI } from '../../models/models';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  login: boolean = false;
  slides: SlideI[] =[];
  nuevoSlide: SlideI;
  datosUser: UserI[];
  asistencia: AsistenciaI[]=[];

  images: [
    {img: '../../assets/icons/poblacion.png'},
    {img: '../../assets/icons/poblacion.png'},
    {img: '../../assets/icons/poblacion.png'},
    {img: '../../assets/icons/poblacion.png'},
    {img: '../../assets/icons/poblacion.png'},
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
                        this.loadSlide();
                        this.loadRegister();
              }

     
ngOnInit(){
  
}

loadSlide(){ 
  const path = 'slides';
  this.db.getCollection<SlideI>(path).subscribe( res => {
    if(res){
      this.slides = res; 
    }
  })
}

loadRegister(){ 
 
  const path = 'usuarios';
  this.db.getCollection<UserI>(path).subscribe( res => {
    if(res){
      this.datosUser = res; 
    }
  })
}



menuOption(){
    this.menuCtrl.toggle();
}

logout(){
  this.auth.logout()
  this.interaction.presentToast('Sesion Finalizada');
      this.router.navigate(['/login'])
}

redirecTo(){
console.log("si");


}

marcar(){
      console.log("no funciona :C");
}

}