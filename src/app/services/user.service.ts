import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';
// import { AngularFireDatabase } from 'angularfire2/database';
// import { FirebaseObjectObservable } from 'angularfire2/database';
// import * as firebase from 'firebase';
import { User} from '../models/user';

@Injectable()
export class UserService {
  public url: string;
  public identity;
  public token;
  constructor(
    //private db: AngularFireDatabase,
    public _http:HttpClient) {
    this.url = GLOBAL.url;
  }

  register(user):Observable<any>{
    let json = JSON.stringify(user);
    let params = 'json='+json;
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
    return this._http.post(this.url+'register',params,{headers:headers});
  }
  signup(user,gettoken = null):Observable<any>{
    if(gettoken !=null){
      user.getToken= 'true';
    }
    let json = JSON.stringify(user);
    let params = 'json='+json;
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
    return this._http.post(this.url+'login',params,{headers:headers});
  }

  getToken(){
    let token = localStorage.getItem('token');
    if(token!="undefined"){
      this.token=token;
    }else{
      this.token=null;
    }

    return this.token;
  }
  getIdentity(){
    let identity = JSON.parse(localStorage.getItem('identity'));
    if(identity!="undefined"){
      this.identity = identity;
    }else{
      this.identity=null;
    }
    return this.identity;
  }


  // save(user: firebase.User) {
  //   this.db.object('/users/' + user.uid).update({
  //     name: user.displayName,
  //     email: user.email
  //   });
  // }
  //
  // get(uid: string): FirebaseObjectObservable<User> {
  //   return this.db.object('/users/' + uid);
  // }


}
