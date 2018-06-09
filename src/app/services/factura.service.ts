import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';
// import { AngularFireDatabase } from 'angularfire2/database';
// import { FirebaseObjectObservable } from 'angularfire2/database';
// import * as firebase from 'firebase';
import { Factura} from '../models/factura';

@Injectable()
export class FacturaService {
  public url: string;
  constructor(public _http:HttpClient) {
    this.url = GLOBAL.url;
  }
  create(token,factura:Factura):Observable<any>{
    let json= JSON.stringify(factura);
    let params = "json="+json;
    console.log("Token pasado",token);
    console.log("Prvee pasado",factura);
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded')
      .set('Authorization',token);

    return this._http.post(this.url+'factura',params,{headers:headers});
  }

  getFacturas():Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
    return this._http.get(this.url + 'factura', {headers:headers});

  }
  getFactura(id):Observable<any>{
    return this._http.get(this.url+'factura/'+id);
  }
  update(token,factura,id):Observable<any> {
    let json= JSON.stringify(factura);
    let params = "json=" + json;
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded')
      .set('Authorization',token);

    return this._http.put(this.url+'factura/'+id,params,{headers:headers});
  }
}
