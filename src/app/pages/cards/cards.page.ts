import { Component, OnInit, ViewChild } from '@angular/core';
import { FileDetector } from 'protractor';
import { HomePageModule } from '../home/home.module';

HomePageModule


@Component({
  selector: 'app-cards',
  templateUrl: './cards.page.html',
  styleUrls: ['./cards.page.scss'],
})


export class CardsPage implements OnInit {


  likeValor : number;
  dislikeValor : number; 
  // LikeValue: number;
  // DislikeValue: number;

  feeds: any[] = [
    {
      id: 1, 
      logo: 'assets/imgs/2.jpg', 
      username: 'Lola Dalmata', 
      location: 'India', 
      src: 'assets/imgs/posts/3.jpg',
      description: 'Cripto',
      like: 15,
      image: true
    },
    {
      id: 2, 
      logo: 'assets/imgs/3.jpg', 
      username: 'German Valentin', 
      location: 'Argentina', 
      src: 'assets/imgs/posts/2.jpg',
      description: 'Facherito',
      like: 80,
      image: true
    },
    {
      id: 3, 
      logo: 'assets/imgs/1.jpg', 
      username: 'Roxana Proxelana', 
      location: 'Miami', 
      src: 'assets/imgs/posts/4.jpg',
      description: "Lolapaasda",
      like: 400,
      image: true

    },
    {
      id: 4, 
      logo: 'assets/imgs/4.jpg', 
      username: 'Santiago Lopez', 
      location: 'Chimbas', 
      src: 'assets/imgs/posts/1.jpg',
      description: "HOP",
      like: 400,
      image: true

    }
 
  ];



  constructor() {  
    this.likeValor = 0;
    // this.LikeValue = 0;
    // this.DislikeValue = 0;
  }
  
  likeComment(feed) {
    feed.like = !feed?.like;
    
  }

  ContadorLikes(){
    this.likeValor++;
    this.dislikeValor--;
   }
  
// handleLike(){
//   this.LikeValue++;

//  }
//  handleDislike(){
//   this.DislikeValue--;
//  }

  ngOnInit() {
  }


 


}
