import { Component, OnInit } from '@angular/core';
import { EquipoI, EquiposIIEE } from 'src/app/models/models';
import { FirestoreService } from 'src/app/services/firestore.service';
import { InteractionService } from 'src/app/services/interaction.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {

  tareas: EquipoI[] =[];

  nuevaTarea: EquipoI;

  Equiposiiee = EquiposIIEE;

  constructor(private db: FirestoreService,
              private interacion: InteractionService, 
              
              ) { }

  ngOnInit() {
    this.loadEquipos();
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
}
