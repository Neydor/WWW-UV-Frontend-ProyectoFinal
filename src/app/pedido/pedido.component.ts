import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ProductoService} from '../services/producto.service';
import { Producto} from '../models/producto';
@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {
  productos:Array<Producto>;
  p:any[];
  constructor(private _productoService: ProductoService, private _router: Router,
              private _route:ActivatedRoute) {

  }
  onSelect(){
    var el = document.getElementById('tabla');

    console.log(el);
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
