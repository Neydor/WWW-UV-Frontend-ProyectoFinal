import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router, Params} from '@angular/router';
import {User} from '../../models/user';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-admin-empleado-registrar',
  templateUrl: './admin-empleado-registrar.component.html',
  providers: [UserService]
})
export class AdminEmpleadoRegistrarComponent implements OnInit {
    cargos:any []=[{nombre:"Analista de compras"},{nombre:"Asesor de ventas"}];
    estados:any []=[{nombre:"Activo"},{nombre:"Inactivo"}];
    empleado:User;
    public status:string;

    constructor(private _userService:UserService,private _router:Router,private _route:ActivatedRoute){
      this.empleado = new User(7,'','',true,'','','','','','','','');

    }

  ngOnInit() {
  }
  guardar(forma: NgForm) {
    console.log("Formulario posteado");
    console.log("ngForm", forma);
    console.log("Valor", forma.value);
    console.log(this.empleado);
    this._userService.register(this.empleado).subscribe(
    response => {
      if(response.status == 'success'){
        this.status = response.status;
        //Vaciar el Formulario
        this.empleado = new User(1,'','',true,'','','','','','','','');
        forma.reset();
      }else{
        this.status = 'error';
      }
    },
    error => {
      console.log(<any>error)
    }
  );
  }

}
