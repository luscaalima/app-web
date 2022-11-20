import { InfoPlaylist, MusicaSP } from './../../musica.model';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SpotifyService } from 'src/app/services/spotify.service';



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
    public dialogRef: MatDialogRef<AddMusicComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public spotifyService: SpotifyService,
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
    this.spotifyService.add_music_playlist(this.playlistValue.id,this.musica.uri_track.split(':')[2])
    this.dialogRef.close({ type: 'novo', music: this.musica, update: true});
  }

}
