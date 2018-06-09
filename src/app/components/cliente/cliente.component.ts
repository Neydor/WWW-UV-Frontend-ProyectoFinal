import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ClienteService} from '../../services/cliente.service';
import { Cliente} from '../../models/cliente';
@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  clientes:Array<Cliente>;
  constructor(private _clienteService: ClienteService, private _router: Router,
              private _route:ActivatedRoute) {

  }

  ngOnInit() {
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
  verCliente(idx: number) {
    this._router.navigate(['/cliente-editar', idx]);
  }
}
