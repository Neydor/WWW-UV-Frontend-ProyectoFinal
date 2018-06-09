import { Component , OnInit, DoCheck} from '@angular/core';
import { Router } from '@angular/router';
//import { AuthService } from './auth.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[UserService]
})
export class AppComponent implements OnInit, DoCheck {

  public identity;
  public token;
  constructor( private _userService:UserService
    //private auth: AuthService,
  ) {
    this.identity= this._userService.getIdentity();
    this.token=this._userService.getToken();
    // //auth.user$.subscribe(user => {
    //   if (user) {
    //     userService.save(user);
    //     let returnUrl = localStorage.getItem('returnUrl');
    //     router.navigateByUrl(returnUrl);
    //   }
    // });
  }
  ngOnInit(){

  }
  ngDoCheck():void{
    this.identity= this._userService.getIdentity();
    this.token=this._userService.getToken();
  }
}
