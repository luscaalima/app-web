import { Component, OnInit } from '@angular/core';
import { SpotifyService } from './../services/spotify.service';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  showFiller = false;
  osbrabos:any[]=[]
  constructor(
    public spotifyService:SpotifyService
  ) {
    this.osBrabo()
   }

  ngOnInit(): void {
  }
  osBrabo(){
    this.spotifyService.get_os_brabos().subscribe(data => {
    console.log(data)
    data.forEach((element:any) => {
      this.osbrabos.push(element)
      
    });
   });
   console.log(this.osbrabos)
   return this.osbrabos
  }
}
