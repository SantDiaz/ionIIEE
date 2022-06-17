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

  public ocultar1: boolean = false;
//   ocultar1: boolean     = false;
  ocultar2: boolean     = false;
  ocultar3: boolean     = false;
  ocultar4: boolean     = false;    
  ocultartodos: boolean = false; 
  
  feeds: any[] = [
    {
      id: 1, 
      // logo: 'assets/imgs/2.jpg', 
      artista: 'pgb', 
      src: 'assets/imgs/posts/3.jpg',
      description: 'Producto BRUTO',
    },
    {
      id: 2, 
      // logo: 'assets/imgs/2.jpg', 
      artista: 'pgb2', 
      src: 'assets/imgs/posts/3.jpg',
      description: 'Producto BRUTO2',
    },
    {
      id: 3, 
      // logo: 'assets/imgs/2.jpg', 
      artista: 'pgb3', 
      src: 'assets/imgs/posts/3.jpg',
      description: 'Producto BasdasdRUTO3',
    },
    {
      id: 4, 
      // logo: 'assets/imgs/2.jpg', 
      artista: 'pgb2', 
      src: 'assets/imgs/posts/3.jpg',
      description: 'Producto BRUTO2adasdasda',
    },
    {
      id: 5, 
      // logo: 'assets/imgs/2.jpg', 
      artista: 'pgb3', 
      src: 'assets/imgs/posts/3.jpg',
      description: 'Producto BRUTOsdasdasdasd3',
    },
    ];
    slideOps = {
      initialSlide: 2,
      slidesPerView: 4,
      centeredSlides: true,
      speed: 400
    };

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

swipeNext(){
  // this.slides.slideNext();
  // this.slides.slideNext();
}




}