
export interface SlideI{
  id: string;
  titulo: string;
  img: string;
  valor: string;
  tiempo: string;
  url: string;
}  

export interface UserI {
  nombre: string;
  apellido: string;
  correo: string;
  uid: string;
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

export const EquiposIIEE = [ 'EPH', 'EOH','IS','EIM','IPCSJ','Cartografía','ADRRA','MMUNVRA','RUB','ENGHO ','IVCC', 'PGB'];
