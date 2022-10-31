import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { SobreComponent } from './components/sobre/sobre.component';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { HomeComponent } from './components/home/home.component';
import { ProjetosComponent } from './components/projetos/projetos.component';
import {MatSelectModule} from '@angular/material/select';
import { FormacoesComponent } from './components/formacoes/formacoes.component';
import {MatButtonModule} from '@angular/material/button';
import { ContatoComponent } from './components/contato/contato.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SobreComponent,
    HomeComponent,
    ProjetosComponent,
    FormacoesComponent,
    ContatoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    MatSelectModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
