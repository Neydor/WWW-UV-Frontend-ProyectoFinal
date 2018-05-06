import { RouterModule, Routes } from '@angular/router';
import { AdminPedidosComponent } from './admin/admin-pedidos/admin-pedidos.component';
import { AdminProductoComponent } from './admin/admin-producto/admin-producto.component';
import { ConfirmarComponent } from './confirmar/confirmar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PedidoComponent } from './pedido/pedido.component';
import { PedidoConfirmadoComponent } from './pedido-confirmado/pedido-confirmado.component';
import { ProductosComponent } from './productos/productos.component';
import { AuthGuardService } from './auth-guard.service';
import { AdminAuthGuardService } from './admin-auth-guard.service';
import { CrearProductoComponent } from './admin/crear-producto/crear-producto.component';
import {AdminEmpleadosComponent} from './admin/admin-empleados/admin-empleados.component';
const APP_ROUTES: Routes = [
  {
    path: 'admin/pedidos',
    component: AdminPedidosComponent,
    canActivate: [AdminAuthGuardService, AuthGuardService]
  },{
    path: 'admin/empleados',
    component: AdminEmpleadosComponent,
    canActivate: [AdminAuthGuardService, AuthGuardService]
  },{
    path: 'admin/empleados/:id',
    component: AdminEmpleadosComponent,
    canActivate: [AdminAuthGuardService, AuthGuardService]
  },
  {
    path: 'admin/producto/:id',
    component: CrearProductoComponent,
    canActivate: [AdminAuthGuardService, AuthGuardService]
  },
  {
    path: 'admin/producto/registrar',
    component: CrearProductoComponent,
    canActivate: [AdminAuthGuardService, AuthGuardService]
  },

  {
    path: 'admin/producto',
    component: AdminProductoComponent,
    canActivate: [AdminAuthGuardService, AuthGuardService]
  },
  { path: 'confirmar', component: ConfirmarComponent, canActivate: [AuthGuardService] },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'pedido', component: PedidoComponent, canActivate: [AuthGuardService] },
  { path: 'pedido-confirmado', component: PedidoConfirmadoComponent, canActivate: [AuthGuardService] },
  { path: 'productos', component: ProductosComponent, canActivate: [AuthGuardService] },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
