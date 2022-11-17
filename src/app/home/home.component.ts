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
    this.osbrabos.forEach((card,index)=>{
        console.log(card)
        console.log(index)
        let item=new MusicaSP();
        item.artists =card.artists
        item.uri =card.album.images[0].url
        item.nome_musica=card.name
        console.log(item)
        this.items.push(item)
      })
  
  }
  showItem(item:any){
    console.log(item)
  }

}
