import { Component, OnInit } from '@angular/core';
import { InfoPlaylist } from '../musica.model';
import { SpotifyService } from './../services/spotify.service';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  showFiller = false;
  osbrabos:any[]=[]
  playlists:InfoPlaylist[]=[]
  constructor(
    public spotifyService:SpotifyService
  ) {
    this.osBrabo()
    this.get_playlist_spotify();
   }

  ngOnInit(): void {
  }
  osBrabo(){
    this.spotifyService.get_os_brabos().subscribe(data => {
    // console.log(data)
    data.forEach((element:any) => {
      this.osbrabos.push(element)
    });
   });
   console.log(this.osbrabos)
   return this.osbrabos
  }
  get_playlist_spotify(){
    console.log('chegou')
    this.spotifyService.get_playlists().subscribe(data => {
      console.log(data)
      data.forEach((element:any) => {
        console.log(element)

        let playlist = new InfoPlaylist();
         playlist.id = element.id;
         if(element.images.length > 0){
          playlist.img = element.images[0].url;
         }
        
         playlist.nome_playlist = element.name
        this.playlists.push(playlist)
      });
     });
  }
}
