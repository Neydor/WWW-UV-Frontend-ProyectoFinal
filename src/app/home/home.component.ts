import { Component, OnInit } from '@angular/core';
import {usuario} from '../models/usuario';
import {AuthService} from './../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
  usuario:usuario;
  constructor(private auth:AuthService){
    auth.usuario$.subscribe(usuario => this.usuario = usuario);
  }

  login() {
    this.auth.login();
  }

}
