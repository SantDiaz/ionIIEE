import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss'],
})
export class SlideComponent implements OnInit {


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
  
  
  
  
  
      constructor() {}
    
  
    ngOnInit() {
    }
    checkActiveButton() {
  
      if ( this.ocultar1 && this.ocultar2 && this.ocultar3 && this.ocultar4 ) {
        this.ocultartodos = true;
      }
      else if ( !this.ocultar1 && !this.ocultar2 && !this.ocultar3 && !this.ocultar4 ) {
        this.ocultartodos = false;
      }
    }
   accion1() {        
    this.ocultar1 = !this.ocultar1;
    this.checkActiveButton();
  }
  
  }
    
  
  