import { Injectable } from '@angular/core';

@Injectable()
export class EmpleadosService {
  private empleado: Empleado;
  private empleados: Empleado[] = [
    {
      cedula: "1116267130",
      nombre: "Neydor",
      apellido: "Avila",
      telefono: "2332113",
      direccion: "calle falsa 123",
      correo: "neydor135@gmail.com",
      contrasena: "Univalle2018",
      cargo: true
    },
    {
      cedula: "1111111111",
      nombre: "Juanito",
      apellido: "Alimaña",
      telefono: "1234567",
      direccion: "la habana",
      correo: "juanito@textiles.com",
      contrasena: "JuanitoTheBest",
      cargo: false
    },
    {
      cedula: "9999999999",
      nombre: "Lionel",
      apellido: "Cristiano",
      telefono: "2323233",
      direccion: "Barsadrid",
      correo: "jaja33@textiles.com",
      contrasena: "maletin99",
      cargo: false
    },
    {
      cedula: "1116274288",
      nombre: "Geraldine",
      apellido: "Lopez",
      telefono: "987456",
      direccion: "marandua",
      correo: "geraldine.villaneda@gmail.com",
      contrasena: "pared123",
      cargo: true
    },
    {
      cedula: "94941496",
      nombre: "Fulanito",
      apellido: "Detal",
      telefono: "9999999",
      direccion: "fulandia 987",
      correo: "asda@textiles.com",
      contrasena: "perensejoAsdas",
      cargo: false
    }]
  constructor() { }
  getEmpleados(): Empleado[] {
    return this.empleados;
  }
  getEmpleado(idx: number): Empleado {
    return this.empleados[idx];
  }
}
export interface Empleado {
  cedula: string,
  nombre: string,
  apellido: string,
  telefono: string,
  direccion: string,
  correo: string,
  contrasena: string,
  cargo: boolean
}
