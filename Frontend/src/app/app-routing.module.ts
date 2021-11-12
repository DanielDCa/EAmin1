import { UpdateEventoComponent } from './components/update-evento/update-evento.component';
import { ListarEventoComponent } from './components/listar-evento/listar-evento.component';
import { UpdateColectivoComponent } from './components/update-colectivo/update-colectivo.component';
import { CrearColectivoComponent } from './components/crear-colectivo/crear-colectivo.component';
import { ListarColectivoComponent } from './components/listar-colectivo/listar-colectivo.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', component: ListarEventoComponent},
  {path:'update-evento/:id',component:UpdateEventoComponent},
  {path:'**',redirectTo:'',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
