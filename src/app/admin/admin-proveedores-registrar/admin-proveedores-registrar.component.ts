import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router} from '@angular/router';
import { UserService} from '../../services/user.service';
import { ProveedorService} from '../../services/proveedor.service';
import { Proveedor} from '../../models/proveedor';

@Component({
  selector: 'app-admin-proveedores-registrar',
  templateUrl: './admin-proveedores-registrar.component.html',
  styleUrls: ['./admin-proveedores-registrar.component.css'],
  providers:[UserService,ProveedorService]
})
export class AdminProveedoresRegistrarComponent implements OnInit {
  proveedor:Proveedor;
  public token;
  public identity;
  status_proveedor:string;
  constructor(private _router:Router,
    private _proveedorService:ProveedorService,
    private _route:ActivatedRoute,
    private _userService:UserService){
      this.identity=_userService.getIdentity();
      this.token=_userService.getToken();
   }

  ngOnInit() {
    if(this.identity ==null){
      this._router.navigate(['/home']);
    }else{
      //Crear proveedor
      this.proveedor=new Proveedor(1,'','','','',null,null);
    }
  }
  guardar(forma: NgForm) {
    console.log("Formulario posteado");
    console.log("ngForm", forma);
    console.log("Valor", forma.value);
    console.log("Proveedor", this.proveedor);
    console.log("Token",this.token);
    this._proveedorService.create(this.token,this.proveedor).subscribe(
      response => {
        console.log(response);
        if(response.status=='success'){
          this.proveedor=response.proveedor;
          this.status_proveedor='success';
          this._router.navigate(['admin/proveedores']);
        }else{
          this.status_proveedor = 'error';
        }

      },
      error=>{
        console.log(<any>error);
        this.status_proveedor = 'error';
      }
    )

  }

}
