import { InfoPlaylist } from './../musica.model';
import { Component, Input, OnInit } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css']
})
export class LeftComponent implements OnInit {
  @Input()
  playlists: Array<InfoPlaylist>=[];
  musicas:any[]=[]
  flag:boolean=false;

  constructor(
    public spotifyService:SpotifyService
  ) { }

  ngOnInit(): void {
    console.log(  'playlists',this.playlists)
  }
  getItems(item:InfoPlaylist){
    console.log(item)
    this.musicas= []
    this.flag =true
    const items =this.spotifyService.get_playlist_items(item.id);
    this.spotifyService.get_playlist_items(item.id).subscribe((data:any) => {
      // this.musicas = data
      console.log(data.items)
      data.items.forEach((musica:any) => {
        const obj:any = {
          "nome_musica":musica.track.name,
          "nome_cantor":musica.track.album.artists[0].name,
        }
        this.musicas.push(obj)
        
      });
    });
   console.log(this.musicas) 

  }
}
