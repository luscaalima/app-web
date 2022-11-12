import { RequisicaoService } from './../requisicao.service';
import { Component, OnInit } from '@angular/core';
import { Musica } from '../musica.model';
export interface InfoMusica {
  name: string;
  cantor: string;
}

// const ELEMENT_DATA: InfoMusica[] = [
//   {name:'Mundo Covarde',cantor:'MC Poze'},
//   {name:'Ai Calica',cantor:'MC Poze'},
//   {name:'Lucas',cantor:'teste'},
//   {name:'Lucas',cantor:'teste'},
//   ];

/**
 * @title Basic use of `<table mat-table>`
 */
 @Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit {
  musicas:Musica[];
  displayedColumns: string[] = ['nome', 'cantor'];
  ELEMENT_DATA: Musica[] = [];
  dataSource:any[]
  constructor(
    public requisicaoService:RequisicaoService
  ) { 
    this.musicas = []
    this.dataSource =[]
    this.chamarRequisicao();
  }

  ngOnInit(): void {
    console.log('passou')
    // s
      this.dataSource = this.ELEMENT_DATA;
  }
  chamarRequisicao(){
    this.requisicaoService.get().subscribe(data=> {
    this.musicas=data
    });
    console.log('musicas',this.musicas)
  }
  print(){
    console.log('musicas',this.musicas) 
    this.dataSource = []
    this.musicas.forEach(musica=>{
      console.log(musica)
      this.dataSource.push(musica)
    })

  }
}
