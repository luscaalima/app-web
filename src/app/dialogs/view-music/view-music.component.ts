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
         console.log('data.music',this.data.music)
        // this.musica = this.data.music
        this.musica = JSON.parse(JSON.stringify(this.data.music));
console.log('musica',this.musica)
      }

  ngOnInit(): void {
    console.log(this.data)
  }
  teste(){
    console.log('musica alterada',this.musica) 
    console.log( 'veio da tabela',this.data.music)
  }
updateMusica(){
  console.log('musica alterada',this.musica) 
  console.log( 'veio da tabela',this.data.music)
  let edit:boolean;
  if (  (this.musica.cantor ===   this.data.music.cantor ) &&     (this.musica.nome ===   this.data.music.nome )  ) {
    console.log('IGUAL');
    // Não faz nada
    edit = false
  }
  else {
    console.log('EDITOU');
    // POST API
    this.data.music=this.musica
    edit = true
  }


  this.dialogRef.close({ type: 'save',music:this.musica ,update:edit});
}
}
