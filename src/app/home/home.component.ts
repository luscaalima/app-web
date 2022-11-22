import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { AddMusicComponent } from '../dialogs/add-music/add-music.component';
import { InfoPlaylist, MusicaSP } from '../musica.model';
import { RequisicaoService } from '../services/requisicao.service';
import { SpotifyService } from './../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

@Input()
osbrabos: Array<any>=[];
@Input()
playlists: Array<InfoPlaylist>=[];

cards:any[]

items:MusicaSP[];



  constructor(
    public dialog: MatDialog,
    public spotifyService:SpotifyService,
    public requisicaService:RequisicaoService,
  ) { 
    this.items = []
    this.cards =[]
  }

  ngOnInit(): void {
 console.log(this.playlists)
  }
  addMusic(item:any){
    console.log(item)
    this.dialog.open(AddMusicComponent, {
      width: '400px',
      height: '400px',
      data: {
       playlists:this.playlists,
       musica:item
      },
      disableClose: true
    }).afterClosed().subscribe(result => {
      console.log(result);
      // if (result.update) {
      //   if(result.type ==='novo'){
      //     console.log('criar nova musica');
         
      //   } 
      // }
    });
  }
   osBrabo(){
    this.osbrabos.forEach((card:any)=>{
        // console.log(card)
        let item=new MusicaSP();
        item.artists =card.artists
        item.uri =card.album.images[0].url
        item.nome_musica=card.name
        item.uri_track = card.uri
        console.log(item)
        this.items.push(item)
      })
  
  }
  add_next_music(item:any){
    console.log(item)
    this.spotifyService.add_next_music(item.uri_track);
  }
  like(item:MusicaSP){
    item.like = true
    // adiconar essa musica em likedSongs
    const track=item.uri_track.split(':')[2]
    this.spotifyService.add_music_likes(track);
  }
  notLike(item:MusicaSP){
    item.like = false
    console.log(item)
    // adiconar essa musica em likedSongs
    const track=item.uri_track.split(':')[2]
    this.spotifyService.del_music_likes(track);
  }
  share(item:MusicaSP){
     // compartilhar no instagram via api
    console.log('share',item.uri)
   
  }
  save(item:MusicaSP){
     console.log(item);
     this.requisicaService.post(item.artists[0].name,item.nome_musica)
  }
  next_music(){
    this.spotifyService.next_music();
  }
}
