import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router} from '@angular/router';
import { UserService} from '../../services/user.service';
import { ClienteService} from '../../services/cliente.service';
import { Cliente} from '../../models/cliente';

@Component({
  selector: 'app-cliente-registrar',
  templateUrl: './cliente-registrar.component.html',
  styleUrls: ['./cliente-registrar.component.css']
})
export class ClienteRegistrarComponent implements OnInit {
  cliente:Cliente;
  public token;
  public identity;
  status_cliente:string;
  constructor(private _router:Router,
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
      this.cliente=new Cliente(1,'','','','',null,null);
    }
  }
  guardar(forma: NgForm) {
    console.log("Formulario posteado");
    console.log("ngForm", forma);
    console.log("Valor", forma.value);
    console.log("Cliente", this.cliente);
    console.log("Token",this.token);
    this._clienteService.create(this.token,this.cliente).subscribe(
      response => {
        console.log(response);
        if(response.status=='success'){
          this.cliente=response.cliente;
          this.status_cliente='success';
          this._router.navigate(['cliente']);
        }else{
          this.status_cliente = 'error';
        }

      },
      error=>{
        console.log(<any>error);
        this.status_cliente = 'error';
      }
    )

  }

}
