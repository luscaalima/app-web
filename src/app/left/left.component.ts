import { InfoPlaylist } from './../musica.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css']
})
export class LeftComponent implements OnInit {
  @Input()
  playlists: Array<InfoPlaylist>=[];
  constructor() { }

  ngOnInit(): void {
    console.log(  'playlists',this.playlists)
  }

}
