import { Component, Input, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { MusicaSP } from '../musica.model';
import { SpotifyService } from './../services/spotify.service';

const THUMBUP_ICON =
  `
  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.` +
  `44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5` +
  `1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"/>
  </svg>
`;


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
    public spotifyService:SpotifyService,
    iconRegistry: MatIconRegistry, sanitizer: DomSanitizer
  ) { 
    this.items = []
    this.cards =[]
    iconRegistry.addSvgIconLiteral('thumbs-up', sanitizer.bypassSecurityTrustHtml(THUMBUP_ICON));
    
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
}
