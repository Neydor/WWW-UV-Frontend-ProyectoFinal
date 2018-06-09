import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params} from '@angular/router';
import { UserService} from '../../services/user.service';
import { ProveedorService} from '../../services/proveedor.service';
import { Proveedor} from '../../models/proveedor';
import { User} from '../../models/user';
@Component({
  selector: 'app-admin-proveedores-editar',
  templateUrl: './admin-proveedores-editar.component.html',
  styleUrls: ['./admin-proveedores-editar.component.css'],
  providers:[UserService,ProveedorService]
})
export class AdminProveedoresEditarComponent implements OnInit {
  public proveedor:Proveedor;
  public title:string;
  public token;
  status_proveedor:string;

  constructor(
    private _router:Router,
    private _proveedorService:ProveedorService,
    private _route:ActivatedRoute,
    private _userService:UserService){
      this.token = this._userService.getToken();
   }

  ngOnInit() {
    this._route.params.subscribe(params=> {
      let id = +params ['id'];
      this.getProveedor(id);
    });
  }

  getProveedor(id){
      this._proveedorService.getProveedor(id).subscribe(
        response=> {
          if(response.status=='success'){
            this.proveedor=response.proveedor;
            console.log("ProveeSolo",this.proveedor)
            this.title = 'Editar  ' + this.proveedor.nombre;
          }else{
            this._router.navigate(['home']);
          }
        },
        error=> {
          console.log(<any>error);
        }
      )
    }

  guardar(form){
    console.log(this.proveedor.id);
    this._proveedorService.update(this.token,this.proveedor,this.proveedor.id).subscribe(
      response => {
        console.log(response);
        this._router.navigate(['admin/proveedores']);
      },
      error => {
        console.log(<any>error);
      }

    );
  }
}
