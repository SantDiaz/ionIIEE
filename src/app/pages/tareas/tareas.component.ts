import { Component, OnInit } from '@angular/core';
import { EquipoI, EquiposIIEE } from 'src/app/models/models';
import { FirestoreService } from 'src/app/services/firestore.service';
import { InteractionService } from 'src/app/services/interaction.service';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.scss'],
})
export class TareasComponent implements OnInit {

  tareas: EquipoI[] =[];
  Equiposiiee = EquiposIIEE;

  constructor(private db: FirestoreService,
    private interacion: InteractionService, 
    ) { }

  ngOnInit() {
    this.loadEquipos();
  }
  
  loadEquipos(){ 
    const path = 'tareas';
    this.db.getCollection<EquipoI>(path).subscribe( res => {
      if(res){
        this.tareas = res; 
      }
    })
  }
}
