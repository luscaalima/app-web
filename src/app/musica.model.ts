export interface Musica{
nome:string;
cantor:string;
}

export class MusicaSP{
    nome_musica:string;
    uri:string  
    artists:any[];  
    uri_track:string;
    like:boolean;
constructor(){
    this.nome_musica = "";
    this.uri ="";
    this.artists=[];
    this.uri_track=""
    this.like=false
}
}
