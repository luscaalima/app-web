import { AppComponent } from './../../app.component';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Musica } from 'src/app/musica.model';

@Component({
  selector: 'app-view-music',
  templateUrl: './view-music.component.html',
  styleUrls: ['./view-music.component.css']
})
export class ViewMusicComponent implements OnInit {

musica:Musica;

  constructor(
    public dialogRef: MatDialogRef<ViewMusicComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
      ) { 
        this.musica = this.data.music
      }

  ngOnInit(): void {
    console.log(this.data)
  }

}
