import { Component, OnInit,DoCheck} from '@angular/core';
import { ActivatedRoute, Router, Params} from '@angular/router';
//import {AuthService} from './../auth.service';
import { NgForm } from '@angular/forms';
import {User} from '../models/user';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers:[UserService]
})
export class NavbarComponent implements OnInit,DoCheck{
  usuario:User;
  infoInvalida= true;
  public token;
  public identity;
  public status:string;

  constructor(private _userService:UserService,private _router:Router,private _route:ActivatedRoute){
    this.usuario = new User(1,'','',true,'','','','','','','','');
  }

  ngOnInit(){
    this.logout();
  }

  logout(){
      this._route.params.subscribe(params=> {
        let logout = +params['sure'];
        if(logout==1){
          localStorage.removeItem('identity');
          localStorage.removeItem('token');
          console.log("ASDASDASDASDAS")
          this.identity = null;
          this.token = null;
          this._router.navigate(['home']);
        }
      });
  }

  onSubmit(forma: NgForm) {
    console.log("Formulario posteado");
    console.log("ngForm", forma);
    console.log("Valor", forma.value);
    this._userService.signup(this.usuario).subscribe(
      response=> {
        if (response.status != 'error') {
          this.status='success';
          this.token=response;
          localStorage.setItem('token',this.token);
          this._userService.signup(this.usuario,true).subscribe(
            response=> {
              this.identity=response;
              localStorage.setItem('identity',JSON.stringify(this.identity));
              console.log("Identidad",this.identity);
            },error => {
              console.log(<any>error);
            }
          );
        }else {
          this.status = 'error';
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }
  ngDoCheck():void{
    this.identity= this._userService.getIdentity();
    this.token=this._userService.getToken();
  }

}
