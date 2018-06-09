import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';
// import { AngularFireDatabase } from 'angularfire2/database';
// import { FirebaseObjectObservable } from 'angularfire2/database';
// import * as firebase from 'firebase';
import { Producto} from '../models/producto';

@Injectable()
export class ProductoService {
  public url: string;
  constructor(public _http:HttpClient) {
    this.url = GLOBAL.url;
  }
  create(token,producto:Producto):Observable<any>{
    let json= JSON.stringify(producto);
    let params = "json="+json;
    console.log("Token pasado",token);
    console.log("Prvee pasado",producto);
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded')
      .set('Authorization',token);

    return this._http.post(this.url+'producto',params,{headers:headers});
  }

  getProductos():Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
    return this._http.get(this.url + 'producto', {headers:headers});

  }
  getProducto(id):Observable<any>{
    return this._http.get(this.url+'producto/'+id);
  }
  update(token,producto,id):Observable<any> {
    let json= JSON.stringify(producto);
    let params = "json=" + json;
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded')
      .set('Authorization',token);

    return this._http.put(this.url+'producto/'+id,params,{headers:headers});
  }
}
