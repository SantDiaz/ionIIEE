import { Component, OnInit } from '@angular/core';
import { EquipoI, EquiposIIEE, SlideI } from 'src/app/models/models';
import { FirestorageService } from 'src/app/services/firestorage.service';
import { FirestoreService } from 'src/app/services/firestore.service';
import { InteractionService } from 'src/app/services/interaction.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {

  tareas: EquipoI[] =[];
  slide: SlideI[] =[];
  nuevaTarea: EquipoI;

  Equiposiiee = EquiposIIEE;
  slides: SlideI[] =[];
  nuevoSlide: SlideI;
  nuevaImage='';
  constructor(private db: FirestoreService,
              private interacion: InteractionService, 
              private firestorageService: FirestorageService,
              ) { }

  ngOnInit() {
    this.loadEquipos();
    this.loadSlide();
  }

AddTarea(){
      this.nuevaTarea={
      id: this.db.getId(), //Crea un id aleatorio de muchos digitos 
      area: null,
      nombre: '', 
      apellido: '',
      tarea: null,
    }
  }

  loadEquipos(){ 
    const path = 'tareas';
    this.db.getCollection<EquipoI>(path).subscribe( res => {
      if(res){
        this.tareas = res; 
      }
    })
  }

  edit(tarea: EquipoI){
    console.log('fuuncio', tarea);
    this.nuevaTarea = tarea;
  }

  async saveTarea(){
    await this.interacion.presentLoading('Guardando...');
      console.log('saveee', this.nuevaTarea);
      const path = 'tareas';
     
    await  this.db.createDoc(this.nuevaTarea, path, this.nuevaTarea.id);
      this.interacion.presentToast('Guardado con exito');
      this.interacion.closeLoading();
  }

async  delete(tarea: EquipoI){
  const res = await this.interacion.presentAlert('Alerta', '¿Seguro que deseas eliminar?');
    console.log('respuesta:', res)
    if (res){
        const path = 'tareas';
    await this.db.deleteDoc(path, tarea.id);
        this.interacion.presentToast('Eliminado con exito');
    }
  }


  // SLIDE

  AddSlide(){
   this.nuevoSlide={
   id: this.db.getId(), //Crea un id aleatorio de muchos digitos 
   titulo: '',
   img: '', 
   valor: '',
   tiempo: '',
   url: '',
  }
  }

  loadSlide(){ 
    const path = 'slides';
    this.db.getCollection<SlideI>(path).subscribe( res => {
      if(res){
        this.slide = res; 
      }
    })
  }

 async saveSlide(){
    await this.interacion.presentLoading('Guardando...');
    // console.log('saveee', this.nuevoSlide);
    const path = 'slides';
   
  await  this.db.createDoc(this.nuevoSlide, path, this.nuevoSlide.id);
    this.interacion.presentToast('Guardado con exito');
    this.interacion.closeLoading();
  }

  editSlide(slides: SlideI){
    console.log('fuuncio', slides);
    this.nuevoSlide = slides;
  }

  async  deleteSlide(slides: SlideI){
    const res = await this.interacion.presentAlert('Alerta', '¿Seguro que deseas eliminar?');
      console.log('respuesta:', res)
      if (res){
          const path = 'slides';
      await this.db.deleteDoc(path, slides.id);
          this.interacion.presentToast('Eliminado con exito');
      }
    }


  async  openImage(event: any){
        // if(event.target.files && event.target.files[0]){
        //   const reader = new FileReader();
        //   reader.onload = ((image) => {
        //     this.nuevaImage = image.target.result as string;

        //   });
        //   reader.readAsDataURL(event.target.files[0])
        // }
    const res = await this.firestorageService.openImage()
    console.log("proomesa", res);
    console.log("fin promesa");
  }

}
