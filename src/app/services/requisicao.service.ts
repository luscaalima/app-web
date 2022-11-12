import { Musica } from '../musica.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

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

get():Observable<Musica[]>{
    return this.httpClient.get<Musica[]>(`${this.apiUrl}/musica`) 
   }
post(cantor:string,nome:string){
   const musica= {
      "cantor": cantor,
      "nome": nome
}
    return this.httpClient.post(`${this.apiUrl}/criar-musica`, musica).toPromise();
  }
}