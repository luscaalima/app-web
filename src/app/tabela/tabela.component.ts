import { RequisicaoService } from '../services/requisicao.service';
import { Component, OnInit } from '@angular/core';
import { Musica } from '../musica.model';
import { MatDialog } from '@angular/material/dialog';
import { ViewMusicComponent } from '../dialogs/view-music/view-music.component';
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
  musicas: Musica[];
  displayedColumns: string[] = ['nome', 'cantor'];
  ELEMENT_DATA: Musica[] = [];
  dataSource: any[]
  constructor(
    public requisicaoService: RequisicaoService,
    public dialog: MatDialog,

  ) {
    this.musicas = []
    this.dataSource = []
    this.chamarRequisicao();
  }

  ngOnInit(): void {
    console.log('passou')
    this.dataSource = this.ELEMENT_DATA;
  }
  chamarRequisicao() {
    this.requisicaoService.get().subscribe(data => {
      this.musicas = data
    });
    console.log('musicas', this.musicas)
  }
  print() {
    console.log('musicas', this.musicas)
    this.dataSource = []
    this.musicas.forEach(musica => {
      console.log(musica)
      this.dataSource.push(musica)
    })
  }
  edit(musica: Musica) {
    console.log('musica a ser editada', musica)
    this.dialog.open(ViewMusicComponent, {
      width: '400px',
      height: '400px',
      data: {
        music: musica,
      }
    }).afterClosed().subscribe(result => {
      console.log(result);
      if (result.update) {
        console.log('editar');
      } else {
        console.log('Não editar');
      }

    });
  }

}
