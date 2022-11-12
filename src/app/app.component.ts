import { Component } from '@angular/core';
import { RequisicaoService } from './requisicao.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  musicas:any;
  constructor(
   public requisicaoService: RequisicaoService
  ){
   
  }
  chamarRequisicao(){

    return new Promise((resolve, reject) => {
 this.requisicaoService.get().then(res=> {
  this.musicas=res
  resolve('ok');
}).catch(err => {
  reject(err);
});
});
  }
  printaRequisicao(){
  console.log(this.musicas);
}
adicionarMusica(){
  this.requisicaoService.post('Matue','Sem Dó')
}
}
