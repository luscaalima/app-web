export interface Musica{
nome:string;
cantor:string;
}

export class MusicaSP{
    nome_musica:string;
    uri:string  
    artists:any[];  
    uri_track:string;
constructor(){
    this.nome_musica = "";
    this.uri ="";
    this.artists=[];
    this.uri_track=""
}
}
