import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router} from '@angular/router';
import { UserService} from '../../services/user.service';
import { ProductoService} from '../../services/producto.service';
import { ProveedorService} from '../../services/proveedor.service';
import { Proveedor} from '../../models/proveedor';
import { Producto} from '../../models/producto';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css'],
  providers:[UserService,ProductoService]
})
export class CrearProductoComponent implements OnInit {
  producto:Producto;
  proveedores:Array<Proveedor>;

  public token;
  public identity;
  status_producto:string;
  constructor(private _router:Router,
    private _productoService:ProductoService,
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
      this.producto=new Producto(1,'','',0,'bien',0,0,0,0,null,null);
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
  }
  guardar(forma: NgForm) {
    console.log("Formulario posteado");
    console.log("ngForm", forma);
    console.log("Valor", forma.value);
    console.log("Producto", this.producto);
    console.log("Token",this.token);
    this._productoService.create(this.token,this.producto).subscribe(
      response => {
        console.log(response);
        if(response.status=='success'){
          this.producto=response.producto;
          this.status_producto='success';
          this._router.navigate(['admin/producto']);
        }else{
          this.status_producto = 'error';
        }

      },
      error=>{
        console.log(<any>error);
        this.status_producto = 'error';
      }
    )

  }

}
