import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavegadorComponent } from './componentes/navegador/navegador.component';
import { ContadorComponent } from './componentes/contador/contador.component';
import { GridPersonajesComponent } from './componentes/grid-personajes/grid-personajes.component';
import { PopupComponent } from './componentes/popup/popup.component';
import { PublicacionesComponent } from './componentes/publicaciones/publicaciones.component';
import { TareasComponent } from './componentes/tareas/tareas.component';

const routes: Routes = [
  {path:"", component: NavegadorComponent},
  {path:"contador", component: ContadorComponent},
  {path:"grid", component: GridPersonajesComponent},
  {path:"popup", component: PopupComponent},
  {path:"polaroid", component: PublicacionesComponent},
  {path:"tareas", component: TareasComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
