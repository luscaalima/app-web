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
  ) { }

  get(): Observable<Musica[]> {
    return this.httpClient.get<Musica[]>(`${this.apiUrl}/musica`)
  }
  post(cantor: string, nome: string) {
    const musica = {
      "cantor": cantor,
      "nome": nome
    }
    console.log(musica)
    return this.httpClient.post(`${this.apiUrl}/criar-musica`, musica).toPromise();
  }
  update(musicaOld: Musica,newMusic:Musica) {
    // console.log('passar essa musica para pegar id', musicaOld)
    // console.log('atualizar essa musica no firebase', newMusic)
    const array:Musica[]=[]
    array.push(musicaOld)
    array.push(newMusic)
    // console.log(array)
   return this.httpClient.put<Musica[]>(`${this.apiUrl}/editar-musica`,array).toPromise() 
  }
}
