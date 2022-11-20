import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  apiUrl = 'http://localhost:5000';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(
    private httpClient: HttpClient
  ) { }


  get(): Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}/sp-get-playlists-musics`)
  }
  get_playlists(): Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}/sp-get-playlists`)
  }
  get_os_brabos(): Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}/sp-brabos`)
  }
  add_next_music(uri_track:any){
  const  uri_track_next_music ={"uri":uri_track}
    return this.httpClient.post(`${this.apiUrl}/sp-add-next-music`,  uri_track_next_music).toPromise()
  }
  add_music_likes(uri_track:any){
    const  uri_track_music ={"uri":uri_track};
    return this.httpClient.post(`${this.apiUrl}/sp-add-music-likes`,  uri_track_music).toPromise()
    }

  del_music_likes(uri_track:any){
      const  uri_track_music ={"uri":uri_track};
      return this.httpClient.put(`${this.apiUrl}/sp-del-music-likes`, uri_track_music).toPromise()
      }
}
