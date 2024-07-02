export interface Turno {
    id: number;
    disponibilidadId: number;
    estado: string;
    motivo: string;
    pacienteid: number;
    fecha_hora: string;
    idmedico: number;
  }

  export interface Medico {
    id: number;
    idEspecialidad: number;
    nombre: string;
    apellido: string;
    foto: string;
    email: string;
    password: string;
    especialidadDto: {
      areaEspecialidad: string;
    };
  }

  export interface Paciente {
    id: number;
    nombre: string;
    apellido: string;
    email: string;
    password: string;
  }

  export interface Especialidad{
    id: number;
    areaespecialidad: string;
  }

  export interface Disponibilidad{
    id:number
    horarios:Blob;
    ubicacion:string;
    id_medico:number;
  }

  export interface Receta{
    id:number
    fecha_hora:string
    turnofk:number
  }