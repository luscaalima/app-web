import { Component, Input, OnInit } from '@angular/core';
import { MusicaSP } from '../musica.model';
import { SpotifyService } from './../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

@Input()
osbrabos: Array<any>=[];

cards:any[]

items:MusicaSP[];



  constructor(
    public spotifyService:SpotifyService
  ) { 
    this.items = []
    this.cards =[]
    
  }

  ngOnInit(): void {
 
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
  showItem(item:any){
    console.log(item)
    this.spotifyService.add_next_music(item.uri_track);
  }

}
