import { Musica } from './musica.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequisicaoService {

  apiUrl = 'http://localhost:5000';
  httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };



  constructor(
    private httpClient: HttpClient
) {}
  get(){
   return new Promise((resolve, reject) => {
      this.httpClient.get<any>(`${this.apiUrl}/musica`).toPromise().then(res => {
        resolve(res);
      }).catch(err => {
        reject(err)
        console.error(err)
      });
    });


  }
  post(cantor:string,nome:string){
   const musica= {
      "cantor": cantor,
      "nome": nome
}
    return this.httpClient.post(`${this.apiUrl}/criar-musica`, musica).toPromise();
  }
}
