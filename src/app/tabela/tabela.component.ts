import { SpotifyService } from './../services/spotify.service';
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
  url_image:string;
  displayedColumns: string[] = ['nome', 'cantor'];
  ELEMENT_DATA: Musica[] = [];
  dataSource: any[]
  constructor(
    public requisicaoService: RequisicaoService,
    public spotifyService:SpotifyService,
    public dialog: MatDialog,

  ) {
    this.url_image=''
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
  adicionarMusica() {
    console.log('addcionar musica')
    // ARRUMAR ESSA GAMBIARRA FEIA
    const novaMusica = {
      'cantor': '',
      'nome': ''
    }
    this.edit(novaMusica, false)

  }
  edit(musica: Musica, k: boolean) {
    console.log('musica a ser editada', musica)
   const  oldMusic = musica
    this.dialog.open(ViewMusicComponent, {
      width: '400px',
      height: '400px',
      data: {
        music: musica,
        edit: k
      },
      disableClose: true
    }).afterClosed().subscribe(result => {
      console.log(result);
      if (result.update) {
        if(result.type ==='novo'){
          console.log('criar nova musica');
          this.requisicaoService.post(result.music.nome,result.music.cantor)
        } else{
          const musica = result.music
          this.requisicaoService.update(oldMusic,musica)
        }
       
      }
    });
  }

  get_playlist_spotify(){
    // this.spotifyService.get().subscribe(data => {
    //   this.url_image = data.items[0].track.album.images[0].url
    //   console.log('data', data.items[0].track.album.images[0].url)
    // });

  }

}
