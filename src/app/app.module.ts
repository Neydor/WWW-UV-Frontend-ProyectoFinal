//rutas y firebase
import { APP_ROUTING } from './app.routes';
import { environment } from './../environments/environment';
//modulos
import { DataTablesModule } from 'angular-datatables';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
//servicios
//import { AuthService } from './auth.service';
//import { AuthGuardService } from './auth-guard.service';
import { UserService } from './services/user.service';
import { ClienteService } from './services/cliente.service';
//import { AdminAuthGuardService } from './admin-auth-guard.service';
import { ProductoService } from './services/producto.service';
import { EmpleadosService } from './empleados.service';
import { ProveedorService} from './services/proveedor.service';
//componentes
import { AppComponent } from './app.component';
import { ProductosComponent } from './productos/productos.component';
import { PedidoComponent } from './pedido/pedido.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ConfirmarComponent } from './confirmar/confirmar.component';
import { PedidoConfirmadoComponent } from './pedido-confirmado/pedido-confirmado.component';
import { AdminProductoComponent } from './admin/admin-producto/admin-producto.component';
import { AdminPedidosComponent } from './admin/admin-pedidos/admin-pedidos.component';
import { LoginComponent } from './login/login.component';
import { CrearProductoComponent } from './admin/crear-producto/crear-producto.component';
import { AdminEmpleadosComponent } from './admin/admin-empleados/admin-empleados.component';
import { AdminEmpleadoRegistrarComponent } from './admin/admin-empleado-registrar/admin-empleado-registrar.component';
import { AdminProveedoresComponent} from './admin/admin-proveedores/admin-proveedores.component';
import { AdminProveedoresRegistrarComponent } from './admin/admin-proveedores-registrar/admin-proveedores-registrar.component';

import { AdminProveedoresEditarComponent } from './admin/admin-proveedores-editar/admin-proveedores-editar.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { ClienteRegistrarComponent } from './components/cliente-registrar/cliente-registrar.component';
import { ClienteEditarComponent } from './components/cliente-editar/cliente-editar.component';
import { FacturaComponent } from './components/factura/factura.component';
import { FacturaRegistrarComponent } from './components/factura-registrar/factura-registrar.component';
import { FacturaEditarComponent } from './components/factura-editar/factura-editar.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    PedidoComponent,
    NavbarComponent,
    HomeComponent,
    ConfirmarComponent,
    PedidoConfirmadoComponent,
    AdminProductoComponent,
    AdminPedidosComponent,
    LoginComponent,
    CrearProductoComponent,
    AdminEmpleadosComponent,
    AdminEmpleadoRegistrarComponent,
    AdminProveedoresComponent,
    AdminProveedoresRegistrarComponent,
    AdminProveedoresEditarComponent,
    ClienteComponent,
    ClienteRegistrarComponent,
    ClienteEditarComponent,
    FacturaComponent,
    FacturaRegistrarComponent,
    FacturaEditarComponent,
  ],
  imports: [
    APP_ROUTING,
    BrowserModule,
    DataTablesModule,
    HttpClientModule,
    FormsModule,
    // AngularFireModule.initializeApp(environment.firebase),
    // AngularFireAuthModule,
    // AngularFireDatabaseModule
  ],
  providers: [//AuthService,
    ProductoService,
    ClienteService,
    //AuthGuardService,
    UserService,
    //AdminAuthGuardService,
    EmpleadosService,
    ProveedorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
