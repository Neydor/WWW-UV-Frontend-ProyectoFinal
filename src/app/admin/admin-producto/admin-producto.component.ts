import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ProductoService} from '../../services/producto.service';
import { Producto} from '../../models/producto';
@Component({
  selector: 'app-admin-producto',
  templateUrl: './admin-producto.component.html',
  styleUrls: ['./admin-producto.component.css']
})
export class AdminProductoComponent implements OnInit {
  productos:Array<Producto>;
  constructor(private _productoService: ProductoService, private _router: Router,
              private _route:ActivatedRoute) {

  }

  ngOnInit() {
    this._productoService.getProductos().subscribe(
      response =>{

        if(response.status == 'success'){
          this.productos= response.productos;
          console.log(this.productos);
        }
      },
      error => {
        console.log(error);
      }
    );
  }
  verProducto(idx: number) {
    this._router.navigate(['/admin/producto', idx]);
  }
}
