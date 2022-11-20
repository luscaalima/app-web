import { InfoPlaylist, MusicaSP } from './../../musica.model';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

// interface Food {
//   value: string;
//   viewValue: string;
// }

// interface Car {
//   value: string;
//   viewValue: string;
// }


@Component({
  selector: 'app-add-music',
  templateUrl: './add-music.component.html',
  styleUrls: ['./add-music.component.css']
})
export class AddMusicComponent implements OnInit {
  playlistValue: InfoPlaylist
  playlists:InfoPlaylist[]=[]
  musica:any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { 
    this.playlistValue=  new InfoPlaylist();
    this.musica = new MusicaSP();
  }

  ngOnInit(): void {
    // console.log(this.data.playlists)
    this.musica = this.data.musica
    this.data.playlists.forEach((item:InfoPlaylist) => {
      this.playlists.push(item)
    });
    console.log(this.playlists)
    console.log( this.musica)
  }
  add_music_playlist(){
    console.log(this.playlistValue);
    console.log( this.musica)
    // this.playlists.find()
  }

}
