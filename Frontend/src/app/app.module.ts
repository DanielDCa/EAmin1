import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearColectivoComponent } from './components/crear-colectivo/crear-colectivo.component';
import { ListarColectivoComponent } from './components/listar-colectivo/listar-colectivo.component';
import { UpdateColectivoComponent } from './components/update-colectivo/update-colectivo.component';
import { ListarEventoComponent } from './components/listar-evento/listar-evento.component';
import { UpdateEventoComponent } from './components/update-evento/update-evento.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearColectivoComponent,
    ListarColectivoComponent,
    UpdateColectivoComponent,
    ListarEventoComponent,
    UpdateEventoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
