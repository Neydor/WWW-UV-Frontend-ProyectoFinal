import { Injectable } from '@angular/core';
@Injectable()
export class ProductoService {
 private producto: Producto;
 private productos:Producto[]=[{
   id: "1",
   nombre: "Tela Roja",
   precio: "10000",
   cantidad: "10",
   costo:"2000",
   presentaciones:true,
   proveedor:"China"
 }, {
   id: "2",
   nombre: "Tela verde",
   precio: "2000",
   cantidad: "110",
   costo:"2000",
   presentaciones:true,
   proveedor:"China"
 }, {
   id: "3",
   nombre: "Tela paquete seda Oro",
   precio: "977000",
   cantidad: "6",
   costo:"50000",
   presentaciones:false,
   proveedor:"Bronx"
 }, {
   id: "4",
   nombre: "Tela paquete poliester Azul",
   precio: "25000",
   cantidad: "77",
   costo:"17000",
   presentaciones:false,
   proveedor:"China"
 }, {
   id: "5",
   nombre: "Tela gris",
   precio: "7500",
   cantidad: "25",
   costo:"500",
   presentaciones:true,
   proveedor:"Medellin"
 }]
  constructor() { }

  getProductos():Producto[]{
    return this.productos;
  }
  getProducto(idx: number): Producto {
    return this.productos[idx];
  }
}
export interface Producto {
  id: string,
  nombre: string,
  precio: string,
  cantidad: string,
  costo: string,
  presentaciones: boolean,
  proveedor: string,
}
