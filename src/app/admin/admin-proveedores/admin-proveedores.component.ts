import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ProveedorService} from '../../services/proveedor.service';
import { Proveedor} from '../../models/proveedor';


@Component({
  selector: 'app-admin-proveedores',
  templateUrl: './admin-proveedores.component.html',
  styleUrls: ['./admin-proveedores.component.css'],
  providers:[ProveedorService]
})
export class AdminProveedoresComponent implements OnInit {
  proveedores:Array<Proveedor>;
  constructor(private _proveedorService: ProveedorService, private _router: Router,
              private _route:ActivatedRoute) {

  }

  ngOnInit() {
    this._proveedorService.getProveedores().subscribe(
      response =>{

        if(response.status == 'success'){
          this.proveedores= response.proveedores;
          console.log(this.proveedores);
        }
      },
      error => {
        console.log(error);
      }
    );
  }
  verProveedor(idx: number) {
    this._router.navigate(['/admin/editar-proveedor', idx]);
  }
}
