import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductoService} from '../../producto.service';
@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {
    presentaciones:any []=[{nombre:"Unidad"},{nombre:"Docena"}];
    producto1:any={}
    producto:any={}



    //<div class="mx-auto"><label block>Nombre</label></div><input block type="text" placeholder="Nombre" name="nombre"/>

    constructor(private activatedRoute:ActivatedRoute,private _productoService:ProductoService){
      this.activatedRoute.params.subscribe(params=>{
      this.producto1=this._productoService.getProducto(params['id']);
    });
    }
    ngOnInit() {

    }
    guardar(forma: NgForm) {
      console.log("Formulario posteado");
      console.log("ngForm", forma);
      console.log("Valor", forma.value);
    }
}
