import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';
// import { AngularFireDatabase } from 'angularfire2/database';
// import { FirebaseObjectObservable } from 'angularfire2/database';
// import * as firebase from 'firebase';
import { Cliente} from '../models/cliente';

@Injectable()
export class ClienteService {
  public url: string;
  constructor(public _http:HttpClient) {
    this.url = GLOBAL.url;
  }
  create(token,cliente:Cliente):Observable<any>{
    let json= JSON.stringify(cliente);
    let params = "json="+json;
    console.log("Token pasado",token);
    console.log("Prvee pasado",cliente);
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded')
      .set('Authorization',token);

    return this._http.post(this.url+'clientes',params,{headers:headers});
  }

  getClientes():Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
    return this._http.get(this.url + 'clientes', {headers:headers});

  }
  getCliente(id):Observable<any>{
    return this._http.get(this.url+'clientes/'+id);
  }
  update(token,cliente,id):Observable<any> {
    let json= JSON.stringify(cliente);
    let params = "json=" + json;
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded')
      .set('Authorization',token);

    return this._http.put(this.url+'clientes/'+id,params,{headers:headers});
  }
}
