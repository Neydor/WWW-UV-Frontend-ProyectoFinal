import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params} from '@angular/router';
import { UserService} from '../../services/user.service';
import { ClienteService} from '../../services/cliente.service';
import { Cliente} from '../../models/cliente';
import { User} from '../../models/user';
@Component({
  selector: 'app-cliente-editar',
  templateUrl: './cliente-editar.component.html',
  styleUrls: ['./cliente-editar.component.css'],
  providers:[UserService,ClienteService]
})
export class ClienteEditarComponent implements OnInit {
  public cliente:Cliente;
  public title:string;
  public token;
  status_cliente:string;

  constructor(
    private _router:Router,
    private _clienteService:ClienteService,
    private _route:ActivatedRoute,
    private _userService:UserService){
      this.token = this._userService.getToken();
   }

  ngOnInit() {
    this._route.params.subscribe(params=> {
      let id = +params ['id'];
      this.getCliente(id);
    });
  }

  getCliente(id){
      this._clienteService.getCliente(id).subscribe(
        response=> {
          if(response.status=='success'){
            this.cliente=response.cliente;
            console.log("ProveeSolo",this.cliente)
            this.title = 'Editar  ' + this.cliente.nombre;
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
    console.log(this.cliente.id);
    this._clienteService.update(this.token,this.cliente,this.cliente.id).subscribe(
      response => {
        console.log(response);
        this._router.navigate(['cliente']);
      },
      error => {
        console.log(<any>error);
      }

    );
  }
}
