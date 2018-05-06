import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoService, Producto } from '../producto.service';
@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {
  productos: Producto[] = [];
  mostrar:boolean=false;
  usuario: Object = {
    cedula:null,
    nombre: null,
    apellido: null,
    telefono: null
  }
    constructor(private _productoService: ProductoService, private router: Router) {

    }

    ngOnInit() {
      this.productos = this._productoService.getProductos();
    }

}
