import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router} from '@angular/router';
import { UserService} from '../../services/user.service';
import { FacturaService} from '../../services/factura.service';
import { ClienteService} from '../../services/cliente.service';
import { Cliente} from '../../models/cliente';
import { Factura} from '../../models/factura';
@Component({
  selector: 'app-factura-editar',
  templateUrl: './factura-editar.component.html',
  styleUrls: ['./factura-editar.component.css']
})
export class FacturaEditarComponent implements OnInit {
  factura:Factura;
  clientes:Array<Cliente>;

  public token;
  public identity;
  status_factura:string;
  constructor(private _router:Router,
    private _facturaService:FacturaService,
    private _clienteService:ClienteService,
    private _route:ActivatedRoute,
    private _userService:UserService){
      this.identity=_userService.getIdentity();
      this.token=_userService.getToken();
   }

  ngOnInit() {
    if(this.identity ==null){
      this._router.navigate(['/home']);
    }else{
      //Crear cliente
      this.factura=new Factura(1,0,0,0,'',null,null);
      this._clienteService.getClientes().subscribe(
        response =>{

          if(response.status == 'success'){
            this.clientes= response.clientes;
            console.log(this.clientes);
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
    console.log("Factura", this.factura);
    console.log("Token",this.token);
    this._facturaService.create(this.token,this.factura).subscribe(
      response => {
        console.log(response);
        if(response.status=='success'){
          this.factura=response.factura;
          this.status_factura='success';
          this._router.navigate(['admin/factura']);
        }else{
          this.status_factura = 'error';
        }

      },
      error=>{
        console.log(<any>error);
        this.status_factura = 'error';
      }
    )

  }


}
