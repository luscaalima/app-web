import { Component, OnInit } from '@angular/core';
import { MusicaSP } from '../musica.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

// cards:any[]=[
// {
//   "nome":"MC Poze",
//   "img":"url_image"
// },
// {
//   "nome":"Matuê",
//   "img":"url_image"
// },

// {
//   "nome":"Marilia Mendonça",
//   "img":"url_image"
// },
// {
//   "nome":"Oruam",
//   "img":"url_image"
// }

// ]
items:MusicaSP[];

cards:any[]=[
  {
      "album": {
          "album_type": "SINGLE",
          "artists": [
              {
                  "external_urls": {
                      "spotify": "https://open.spotify.com/artist/7gHzR22tDNSWGS4HkvvPgw"
                  },
                  "href": "https://api.spotify.com/v1/artists/7gHzR22tDNSWGS4HkvvPgw",
                  "id": "7gHzR22tDNSWGS4HkvvPgw",
                  "name": "THE BOX",
                  "type": "artist",
                  "uri": "spotify:artist:7gHzR22tDNSWGS4HkvvPgw"
              },
              {
                  "external_urls": {
                      "spotify": "https://open.spotify.com/artist/1qYCFTfaAPk15UPO93sStr"
                  },
                  "href": "https://api.spotify.com/v1/artists/1qYCFTfaAPk15UPO93sStr",
                  "id": "1qYCFTfaAPk15UPO93sStr",
                  "name": "Martelin",
                  "type": "artist",
                  "uri": "spotify:artist:1qYCFTfaAPk15UPO93sStr"
              },
              {
                  "external_urls": {
                      "spotify": "https://open.spotify.com/artist/6PCKJU7fu36U4fRl7354wU"
                  },
                  "href": "https://api.spotify.com/v1/artists/6PCKJU7fu36U4fRl7354wU",
                  "id": "6PCKJU7fu36U4fRl7354wU",
                  "name": "Mateca",
                  "type": "artist",
                  "uri": "spotify:artist:6PCKJU7fu36U4fRl7354wU"
              }
          ],
          "external_urls": {
              "spotify": "https://open.spotify.com/album/47NrbTQQsJLJNrJLjsQNCe"
          },
          "href": "https://api.spotify.com/v1/albums/47NrbTQQsJLJNrJLjsQNCe",
          "id": "47NrbTQQsJLJNrJLjsQNCe",
          "images": [
              {
                  "height": 640,
                  "url": "https://i.scdn.co/image/ab67616d0000b27373c0ff6f6f11c4b600c65062",
                  "width": 640
              },
              {
                  "height": 300,
                  "url": "https://i.scdn.co/image/ab67616d00001e0273c0ff6f6f11c4b600c65062",
                  "width": 300
              },
              {
                  "height": 64,
                  "url": "https://i.scdn.co/image/ab67616d0000485173c0ff6f6f11c4b600c65062",
                  "width": 64
              }
          ],
          "name": "THE BOX MEDLEY 4",
          "release_date": "2022-10-13",
          "release_date_precision": "day",
          "total_tracks": 1,
          "type": "album",
          "uri": "spotify:album:47NrbTQQsJLJNrJLjsQNCe"
      },
      "artists": [
          {
              "external_urls": {
                  "spotify": "https://open.spotify.com/artist/7gHzR22tDNSWGS4HkvvPgw"
              },
              "href": "https://api.spotify.com/v1/artists/7gHzR22tDNSWGS4HkvvPgw",
              "id": "7gHzR22tDNSWGS4HkvvPgw",
              "name": "THE BOX",
              "type": "artist",
              "uri": "spotify:artist:7gHzR22tDNSWGS4HkvvPgw"
          },
          {
              "external_urls": {
                  "spotify": "https://open.spotify.com/artist/1qYCFTfaAPk15UPO93sStr"
              },
              "href": "https://api.spotify.com/v1/artists/1qYCFTfaAPk15UPO93sStr",
              "id": "1qYCFTfaAPk15UPO93sStr",
              "name": "Martelin",
              "type": "artist",
              "uri": "spotify:artist:1qYCFTfaAPk15UPO93sStr"
          },
          {
              "external_urls": {
                  "spotify": "https://open.spotify.com/artist/6PCKJU7fu36U4fRl7354wU"
              },
              "href": "https://api.spotify.com/v1/artists/6PCKJU7fu36U4fRl7354wU",
              "id": "6PCKJU7fu36U4fRl7354wU",
              "name": "Mateca",
              "type": "artist",
              "uri": "spotify:artist:6PCKJU7fu36U4fRl7354wU"
          },
          {
              "external_urls": {
                  "spotify": "https://open.spotify.com/artist/2mNP0EIVZICxF8NJ46SG0L"
              },
              "href": "https://api.spotify.com/v1/artists/2mNP0EIVZICxF8NJ46SG0L",
              "id": "2mNP0EIVZICxF8NJ46SG0L",
              "name": "Meno Tody",
              "type": "artist",
              "uri": "spotify:artist:2mNP0EIVZICxF8NJ46SG0L"
          },
          {
              "external_urls": {
                  "spotify": "https://open.spotify.com/artist/00DTlsaKlzH3JrAjgU61Ha"
              },
              "href": "https://api.spotify.com/v1/artists/00DTlsaKlzH3JrAjgU61Ha",
              "id": "00DTlsaKlzH3JrAjgU61Ha",
              "name": "OG BEBEL",
              "type": "artist",
              "uri": "spotify:artist:00DTlsaKlzH3JrAjgU61Ha"
          },
          {
              "external_urls": {
                  "spotify": "https://open.spotify.com/artist/3Rwms7zByQMzHZdIKhqpSK"
              },
              "href": "https://api.spotify.com/v1/artists/3Rwms7zByQMzHZdIKhqpSK",
              "id": "3Rwms7zByQMzHZdIKhqpSK",
              "name": "Mestre B",
              "type": "artist",
              "uri": "spotify:artist:3Rwms7zByQMzHZdIKhqpSK"
          }
      ],
      "disc_number": 1,
      "duration_ms": 314325,
      "explicit": false,
      "external_ids": {
          "isrc": "BXIV82258868"
      },
      "external_urls": {
          "spotify": "https://open.spotify.com/track/0WR9mWc2yPBHOTiwkBR7oA"
      },
      "href": "https://api.spotify.com/v1/tracks/0WR9mWc2yPBHOTiwkBR7oA",
      "id": "0WR9mWc2yPBHOTiwkBR7oA",
      "is_local": false,
      "name": "THE BOX MEDLEY 4",
      "popularity": 58,
      "preview_url": "https://p.scdn.co/mp3-preview/aa5cbd7114ebfe11f0b8a902393a15b418b7035a?cid=fbb9a866ad494ad4a92e468687de78b4",
      "track_number": 1,
      "type": "track",
      "uri": "spotify:track:0WR9mWc2yPBHOTiwkBR7oA"
  },
  {
      "album": {
          "album_type": "SINGLE",
          "artists": [
              {
                  "external_urls": {
                      "spotify": "https://open.spotify.com/artist/5ncITNKBT3RMa1U2NsuE7V"
                  },
                  "href": "https://api.spotify.com/v1/artists/5ncITNKBT3RMa1U2NsuE7V",
                  "id": "5ncITNKBT3RMa1U2NsuE7V",
                  "name": "DJ BOY",
                  "type": "artist",
                  "uri": "spotify:artist:5ncITNKBT3RMa1U2NsuE7V"
              },
              {
                  "external_urls": {
                      "spotify": "https://open.spotify.com/artist/5InVWl8IZB8zFAoNa5roKm"
                  },
                  "href": "https://api.spotify.com/v1/artists/5InVWl8IZB8zFAoNa5roKm",
                  "id": "5InVWl8IZB8zFAoNa5roKm",
                  "name": "Mc Kako",
                  "type": "artist",
                  "uri": "spotify:artist:5InVWl8IZB8zFAoNa5roKm"
              },
              {
                  "external_urls": {
                      "spotify": "https://open.spotify.com/artist/6XFc29m1ptfUNmaa1UTuBT"
                  },
                  "href": "https://api.spotify.com/v1/artists/6XFc29m1ptfUNmaa1UTuBT",
                  "id": "6XFc29m1ptfUNmaa1UTuBT",
                  "name": "MC Joãozinho VT",
                  "type": "artist",
                  "uri": "spotify:artist:6XFc29m1ptfUNmaa1UTuBT"
              }
          ],
          "external_urls": {
              "spotify": "https://open.spotify.com/album/780KNfna6zGXAd46qZZmoS"
          },
          "href": "https://api.spotify.com/v1/albums/780KNfna6zGXAd46qZZmoS",
          "id": "780KNfna6zGXAd46qZZmoS",
          "images": [
              {
                  "height": 640,
                  "url": "https://i.scdn.co/image/ab67616d0000b27384a0de60b871161ee2bd4657",
                  "width": 640
              },
              {
                  "height": 300,
                  "url": "https://i.scdn.co/image/ab67616d00001e0284a0de60b871161ee2bd4657",
                  "width": 300
              },
              {
                  "height": 64,
                  "url": "https://i.scdn.co/image/ab67616d0000485184a0de60b871161ee2bd4657",
                  "width": 64
              }
          ],
          "name": "Bokaloka",
          "release_date": "2022-10-07",
          "release_date_precision": "day",
          "total_tracks": 1,
          "type": "album",
          "uri": "spotify:album:780KNfna6zGXAd46qZZmoS"
      },
      "artists": [
          {
              "external_urls": {
                  "spotify": "https://open.spotify.com/artist/5ncITNKBT3RMa1U2NsuE7V"
              },
              "href": "https://api.spotify.com/v1/artists/5ncITNKBT3RMa1U2NsuE7V",
              "id": "5ncITNKBT3RMa1U2NsuE7V",
              "name": "DJ BOY",
              "type": "artist",
              "uri": "spotify:artist:5ncITNKBT3RMa1U2NsuE7V"
          },
          {
              "external_urls": {
                  "spotify": "https://open.spotify.com/artist/5InVWl8IZB8zFAoNa5roKm"
              },
              "href": "https://api.spotify.com/v1/artists/5InVWl8IZB8zFAoNa5roKm",
              "id": "5InVWl8IZB8zFAoNa5roKm",
              "name": "Mc Kako",
              "type": "artist",
              "uri": "spotify:artist:5InVWl8IZB8zFAoNa5roKm"
          },
          {
              "external_urls": {
                  "spotify": "https://open.spotify.com/artist/6XFc29m1ptfUNmaa1UTuBT"
              },
              "href": "https://api.spotify.com/v1/artists/6XFc29m1ptfUNmaa1UTuBT",
              "id": "6XFc29m1ptfUNmaa1UTuBT",
              "name": "MC Joãozinho VT",
              "type": "artist",
              "uri": "spotify:artist:6XFc29m1ptfUNmaa1UTuBT"
          },
          {
              "external_urls": {
                  "spotify": "https://open.spotify.com/artist/6aoGgTKGqtsjj48ymcNs4Z"
              },
              "href": "https://api.spotify.com/v1/artists/6aoGgTKGqtsjj48ymcNs4Z",
              "id": "6aoGgTKGqtsjj48ymcNs4Z",
              "name": "MC Tuto",
              "type": "artist",
              "uri": "spotify:artist:6aoGgTKGqtsjj48ymcNs4Z"
          },
          {
              "external_urls": {
                  "spotify": "https://open.spotify.com/artist/0dMxJWycjt9JSslipcs3J6"
              },
              "href": "https://api.spotify.com/v1/artists/0dMxJWycjt9JSslipcs3J6",
              "id": "0dMxJWycjt9JSslipcs3J6",
              "name": "MC V7",
              "type": "artist",
              "uri": "spotify:artist:0dMxJWycjt9JSslipcs3J6"
          },
          {
              "external_urls": {
                  "spotify": "https://open.spotify.com/artist/34sEmYjj5FMamhC0iI0Tgv"
              },
              "href": "https://api.spotify.com/v1/artists/34sEmYjj5FMamhC0iI0Tgv",
              "id": "34sEmYjj5FMamhC0iI0Tgv",
              "name": "MC Erik",
              "type": "artist",
              "uri": "spotify:artist:34sEmYjj5FMamhC0iI0Tgv"
          },
          {
              "external_urls": {
                  "spotify": "https://open.spotify.com/artist/0xqfPNw8PlhGeWAucPrbkr"
              },
              "href": "https://api.spotify.com/v1/artists/0xqfPNw8PlhGeWAucPrbkr",
              "id": "0xqfPNw8PlhGeWAucPrbkr",
              "name": "Mc Pê Leal",
              "type": "artist",
              "uri": "spotify:artist:0xqfPNw8PlhGeWAucPrbkr"
          },
          {
              "external_urls": {
                  "spotify": "https://open.spotify.com/artist/3UfwtvPZZea2HHwI23VtKP"
              },
              "href": "https://api.spotify.com/v1/artists/3UfwtvPZZea2HHwI23VtKP",
              "id": "3UfwtvPZZea2HHwI23VtKP",
              "name": "MC Vine7",
              "type": "artist",
              "uri": "spotify:artist:3UfwtvPZZea2HHwI23VtKP"
          },
          {
              "external_urls": {
                  "spotify": "https://open.spotify.com/artist/7Lmrb6KcIzfkmgbtokjsAL"
              },
              "href": "https://api.spotify.com/v1/artists/7Lmrb6KcIzfkmgbtokjsAL",
              "id": "7Lmrb6KcIzfkmgbtokjsAL",
              "name": "Mc Don Juan",
              "type": "artist",
              "uri": "spotify:artist:7Lmrb6KcIzfkmgbtokjsAL"
          }
      ],
     
      "disc_number": 1,
      "duration_ms": 553536,
      "explicit": true,
      "external_ids": {
          "isrc": "BCSOR2200127"
      },
      "external_urls": {
          "spotify": "https://open.spotify.com/track/15MMy5OQqEyGBLkjVSsS9e"
      },
      "href": "https://api.spotify.com/v1/tracks/15MMy5OQqEyGBLkjVSsS9e",
      "id": "15MMy5OQqEyGBLkjVSsS9e",
      "is_local": false,
      "name": "Bokaloka",
      "popularity": 61,
      "preview_url": "https://p.scdn.co/mp3-preview/108d4d94c2745c4e6bb759973e222e45a29835fd?cid=fbb9a866ad494ad4a92e468687de78b4",
      "track_number": 1,
      "type": "track",
      "uri": "spotify:track:15MMy5OQqEyGBLkjVSsS9e"
  },]

  constructor() { 
    this.items = []
  }

  ngOnInit(): void {
  
  this.cards.forEach((card,index)=>{
    console.log(card)
    console.log(index)
    let item=new MusicaSP();
    item.artists =card.artists
    item.uri =card.album.images[0].url
    item.nome_musica=card.name
    this.items.push(item)
  // this.items[index].artists=card.artists
  // this.items[index].uri=card.images[0].url
  // this.items[index].nome_musica=card.images[0].name
    // item.artists = card.artists
    

  })
 console.log(this.items)
  }

}
