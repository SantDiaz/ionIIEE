
export interface SlideI{
  id: string;
  titulo: string;
  img: string;
  valor: string;
  tiempo: string;
  url: string;
}  

export interface UserI {
  uid: string;
  nombre: string;
  apellido: string;
  correo: string;
  password: string;
  perfil: 'visitante'| 'admin',
}

export interface EquipoI {
  id: string;
  nombre: string;
  apellido: string;
  area: 'EPH' | 'EOH' | 'IS' | 'EIM' | 'IPCSJ' | 'Cartografía' | 'ADRRA' | 'MMUNVRA' | 'RUB' | 'ENGHO' | 'IVCC' | 'PGB';
  tarea: string; 
}

export interface AsistenciaI {
    uid: string;
    nombre: string;
    area: string;
    fechaActual: string;
}

export const EquiposIIEE = [ 'EPH', 'EOH','IS','EIM','IPCSJ','Cartografía','ADRRA','MMUNVRA','RUB','ENGHO ','IVCC', 'PGB'];
