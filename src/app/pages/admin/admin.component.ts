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
  }


  async saveTarea(){
    await this.interacion.presentLoading('Guardando...');
      console.log('saveee', this.nuevaTarea);
      const path = 'tareas';
     
    await  this.db.createDoc(this.nuevaTarea, path, this.nuevaTarea.id);
      this.interacion.presentToast('Guardado con exito');
      this.interacion.closeLoading();
  }
}
