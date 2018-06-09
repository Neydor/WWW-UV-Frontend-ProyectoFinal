import { Component, OnInit } from '@angular/core';
//import {AuthService} from './../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
  usuario:any;
  constructor(
    //private auth:AuthService
  ){
    //auth.usuario$.subscribe(usuario => this.usuario = usuario);
  }


}
