import { RequisicaoService } from '../services/requisicao.service';
import { Component, OnInit } from '@angular/core';
import { Musica } from '../musica.model';
import { MatDialog } from '@angular/material/dialog';
import { ViewMusicComponent } from '../dialogs/view-music/view-music.component';
// export interface InfoMusica {
//   name: string;
//   cantor: string;
// }

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
  adicionarMusica(){
console.log('addcionar musica')
// ARRUMAR ESSA GAMBIARRA FEIA
const novaMusica = {
'cantor':'',
'nome':''
}
this.edit(novaMusica,false)
// console.log(novaMusica)
// novaMusica.nome=''
// novaMusica.cantor=''



  }
  edit(musica: Musica,k:boolean) {
    console.log('musica a ser editada', musica)
    this.dialog.open(ViewMusicComponent, {
      width: '400px',
      height: '400px',
      data: {
        music: musica,
        edit:k
      },
      disableClose: true
    }).afterClosed().subscribe(result => {
      console.log(result);
      if (result.update) {
        console.log('editar');
        const musica = result.music
        this.requisicaoService.update(musica)
      } 
      // else {
      //   console.log('Não editar');
      // }
    });
  }

}
