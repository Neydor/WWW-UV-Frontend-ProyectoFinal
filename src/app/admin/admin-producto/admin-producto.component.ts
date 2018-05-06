import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoService, Producto } from '../../producto.service';
@Component({
  selector: 'app-admin-producto',
  templateUrl: './admin-producto.component.html',
  styleUrls: ['./admin-producto.component.css']
})
export class AdminProductoComponent implements OnInit {
productos: Producto[] = [];
  constructor(private _productoService: ProductoService, private router: Router) {

  }

  ngOnInit() {
    this.productos = this._productoService.getProductos();
  }
  verProducto(idx: number) {
    this.router.navigate(['/admin/producto', idx]);
  }


}
