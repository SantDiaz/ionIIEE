import { Component, OnInit } from '@angular/core';
import { EquipoI, EquiposIIEE, SlideI, UserI } from 'src/app/models/models';
import { AuthService } from 'src/app/services/auth.service';
import { FirestorageService } from 'src/app/services/firestorage.service';
import { FirestoreService } from 'src/app/services/firestore.service';
import { InteractionService } from 'src/app/services/interaction.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {

  datosUser: UserI[];
  nuevoUser: UserI;
  tareas: EquipoI[] =[];
  nuevaTarea: EquipoI;
  slide: SlideI[] =[];
  Equiposiiee = EquiposIIEE;
  nuevoSlide: SlideI;
  nuevaImage='';
  constructor(private db: FirestoreService,
              private interacion: InteractionService, 
              private auth: AuthService,
              private firestorageService: FirestorageService,
              ) { }

  ngOnInit() {
    this.loadEquipos();
    this.loadSlide();
    this.loadRegister();
  }

  loadRegister(){ 
 
    const path = 'usuarios';
    this.db.getCollection<UserI>(path).subscribe( res => {
      if(res){
        this.datosUser = res; 
      }
    })
  }

  AddUser(){
    this.nuevoUser={
      uid: this.db.getId(), //Crea un id aleatorio de muchos digitos 
      nombre: '',
      apellido: '',
      correo: '', 
      password: '',
      perfil: 'visitante',
  
    }
  }

 async saveUser(){
    await this.interacion.presentLoading('Guardando...');
    const path = 'usuarios';
   
  await  this.db.createDoc(this.nuevoUser, path, this.nuevoUser.uid);
    this.interacion.presentToast('Guardado con exito');
    this.interacion.closeLoading();
  }

  
  editUser(user: UserI){
    console.log('fuuncio', user);
    this.nuevoUser = user;
  }

  async  deleteUser(user: UserI){
    const res = await this.interacion.presentAlert('Alerta', '¿Seguro que deseas eliminar?');
      if (res){
          const path = 'usuarios';
      await this.db.deleteDoc(path, user.uid);
          this.interacion.presentToast('Eliminado con exito');
      }
    }

  //INICIO TAREAAAA 
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
