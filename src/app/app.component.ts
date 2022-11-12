import { Component } from '@angular/core';
import { Musica } from './musica.model';
import { RequisicaoService } from './requisicao.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // musicas:any;
  musicas:Musica[];
  cantor:string;
  constructor(
   public requisicaoService: RequisicaoService
  ){
   this.musicas=[]
   this.cantor=''
   this.chamarRequisicao()
  }

chamarRequisicao(){
  this.requisicaoService.get().subscribe(data=> {
  this.musicas=data
  });
}
getMusicasByCantor(cantor:string){
  console.log(cantor)
  this.chamarRequisicao();
  console.log(this.musicas);
  const musicasFilter = this.musicas .filter(f=>f.cantor===cantor)
  console.log(musicasFilter);

}
  printaRequisicao(){
  console.log(this.musicas);
  this.musicas.forEach(musica=>{
    console.log(musica)
  });
  console.log(this.cantor)
}
adicionarMusica(){
  this.requisicaoService.post('Matue','Sem Dó')
}
}
