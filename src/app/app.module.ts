import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';


import { AppComponent } from './app.component';
import { TabelaComponent } from './tabela/tabela.component';
import { ViewMusicComponent } from './dialogs/view-music/view-music.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HomeComponent } from './home/home.component';
import { LeftComponent } from './left/left.component';
import { AddMusicComponent } from './dialogs/add-music/add-music.component';

@NgModule({
  declarations: [
    AppComponent,
    TabelaComponent,
    ViewMusicComponent,
    SidenavComponent,
    HomeComponent,
    LeftComponent,
    AddMusicComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatSelectModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
