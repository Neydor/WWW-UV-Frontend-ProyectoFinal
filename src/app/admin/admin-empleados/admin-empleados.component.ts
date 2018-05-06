import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpleadosService, Empleado } from '../../empleados.service';

@Component({
  selector: 'app-admin-empleados',
  templateUrl: './admin-empleados.component.html',
  styleUrls: ['./admin-empleados.component.css']
})
export class AdminEmpleadosComponent implements OnInit {
  empleados: Empleado[] = [];
  constructor(private _empleadoService: EmpleadosService, private router: Router) {

  }

  ngOnInit() {
    this.empleados = this._empleadoService.getEmpleados();
  }
  verEmpleado(idx: number) {
    this.router.navigate(['/admin/producto', idx]);
  }
}
