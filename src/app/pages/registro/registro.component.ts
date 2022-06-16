import { Component, OnInit } from '@angular/core';
import { UserI } from '../../models/models';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent implements OnInit {


    datosUser : UserI = {
      nombre: null,
      apellido: null,
      correo: null,
      password: null,
      perfil: 'usuario',
    }

  constructor() { }

  ngOnInit() {}
  
  registrar(){

  }
}
