import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContadorComponent } from './componentes/contador/contador.component';
import { NavegadorComponent } from './componentes/navegador/navegador.component';
import { GridPersonajesComponent } from './componentes/grid-personajes/grid-personajes.component';
import { PopupComponent } from './componentes/popup/popup.component';
import { PublicacionesComponent } from './componentes/publicaciones/publicaciones.component';
import { FormsModule } from '@angular/forms';
import { TareasComponent } from './componentes/tareas/tareas.component'; 
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    NavegadorComponent,
    GridPersonajesComponent,
    PopupComponent,
    PublicacionesComponent,
    TareasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
