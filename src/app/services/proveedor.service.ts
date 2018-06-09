import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';
// import { AngularFireDatabase } from 'angularfire2/database';
// import { FirebaseObjectObservable } from 'angularfire2/database';
// import * as firebase from 'firebase';
import { Proveedor} from '../models/proveedor';

@Injectable()
export class ProveedorService {
  public url: string;
  constructor(public _http:HttpClient) {
    this.url = GLOBAL.url;
  }
  create(token,proveedor:Proveedor):Observable<any>{
    let json= JSON.stringify(proveedor);
    let params = "json="+json;
    console.log("Token pasado",token);
    console.log("Prvee pasado",proveedor);
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded')
      .set('Authorization',token);

    return this._http.post(this.url+'proveedores',params,{headers:headers});
  }

  getProveedores():Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
    return this._http.get(this.url + 'proveedores', {headers:headers});

  }
  getProveedor(id):Observable<any>{
    return this._http.get(this.url+'proveedores/'+id);
  }
  update(token,proveedor,id):Observable<any> {
    let json= JSON.stringify(proveedor);
    let params = "json=" + json;
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded')
      .set('Authorization',token);

    return this._http.put(this.url+'proveedores/'+id,params,{headers:headers});
  }
}
