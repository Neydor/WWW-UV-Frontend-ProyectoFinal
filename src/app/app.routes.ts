import { RouterModule, Routes } from '@angular/router';
import { AdminPedidosComponent } from './admin/admin-pedidos/admin-pedidos.component';
import { AdminProductoComponent } from './admin/admin-producto/admin-producto.component';
import { ConfirmarComponent } from './confirmar/confirmar.component';
import { HomeComponent } from './home/home.component';
import { PedidoComponent } from './pedido/pedido.component';
import { PedidoConfirmadoComponent } from './pedido-confirmado/pedido-confirmado.component';
import { ProductosComponent } from './productos/productos.component';
import { NavbarComponent } from './navbar/navbar.component';
// import { AuthGuardService } from './auth-guard.service';
// import { AdminAuthGuardService } from './admin-auth-guard.service';
import { CrearProductoComponent } from './admin/crear-producto/crear-producto.component';

import { ClienteComponent } from './components/cliente/cliente.component';
import { ClienteRegistrarComponent } from './components/cliente-registrar/cliente-registrar.component';
import { ClienteEditarComponent } from './components/cliente-editar/cliente-editar.component';

import {AdminEmpleadosComponent} from './admin/admin-empleados/admin-empleados.component';
import {AdminEmpleadoRegistrarComponent} from './admin/admin-empleado-registrar/admin-empleado-registrar.component';
import {AdminProveedoresComponent} from './admin/admin-proveedores/admin-proveedores.component';
import { AdminProveedoresRegistrarComponent} from './admin/admin-proveedores-registrar/admin-proveedores-registrar.component';
import { AdminProveedoresEditarComponent} from './admin/admin-proveedores-editar/admin-proveedores-editar.component';
const APP_ROUTES: Routes = [
  {
    path: 'cliente',
    component: ClienteComponent,
    //canActivate: [AdminAuthGuardService, AuthGuardService]
  },{
    path: 'cliente-registrar',
    component: ClienteRegistrarComponent,
    //canActivate: [AdminAuthGuardService, AuthGuardService]
  },{
    path: 'cliente-editar/:id',
    component: ClienteEditarComponent,
    //canActivate: [AdminAuthGuardService, AuthGuardService]
  },{
    path: 'admin/pedidos',
    component: AdminPedidosComponent,
    //canActivate: [AdminAuthGuardService, AuthGuardService]
  },{
    path: 'admin/empleados',
    component: AdminEmpleadosComponent,
  //  canActivate: [AdminAuthGuardService, AuthGuardService]
  },{
    path: 'admin/empleados/:id',
    component: AdminEmpleadosComponent,
    //canActivate: [AdminAuthGuardService, AuthGuardService]
  },{
  path: 'admin/empleado/registrar',
  component: AdminEmpleadoRegistrarComponent,
  //canActivate: [AdminAuthGuardService, AuthGuardService]
  },{
  path: 'admin/proveedores',
  component: AdminProveedoresComponent,
  //canActivate: [AdminAuthGuardService, AuthGuardService]
},{
  path: 'admin/editar-proveedor/:id',
  component: AdminProveedoresEditarComponent,
  //canActivate: [AdminAuthGuardService, AuthGuardService]
  },{
  path: 'admin/proveedores/registrar',
  component: AdminProveedoresRegistrarComponent,
  //canActivate: [AdminAuthGuardService, AuthGuardService]
  },
  {
    path: 'admin/producto/:id',
    component: CrearProductoComponent,
  //  canActivate: [AdminAuthGuardService, AuthGuardService]
  },{
    path: 'admin/producto/registrar',
    component: CrearProductoComponent,
    //canActivate: [AdminAuthGuardService, AuthGuardService]
  },{
    path: 'admin/producto',
    component: AdminProductoComponent,
  //  canActivate: [AdminAuthGuardService, AuthGuardService]
  },{
    path: 'confirmar',
    component: ConfirmarComponent,
  //  canActivate: [AuthGuardService]
  },{
    path: 'home',
    component: HomeComponent
  },{
    path: 'pedido',
    component: PedidoComponent,
  //  canActivate: [AuthGuardService]
  },{
    path: 'pedido-confirmado',
    component: PedidoConfirmadoComponent,
    //canActivate: [AuthGuardService]
  },{
    path: 'productos',
    component: ProductosComponent,
  //  canActivate: [AuthGuardService]
  },{
    path: 'logout/:sure',
    component: NavbarComponent,
  //  canActivate: [AuthGuardService]
  },{
    path: '**',
    pathMatch: 'full', redirectTo: 'home'
  }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
