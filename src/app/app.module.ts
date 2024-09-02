import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';  // Adicione esta linha
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RodapeComponent } from './rodape/rodape.component';
import { TopoComponent } from './topo/topo.component';
import { DiversaoComponent } from './diversao/diversao.component';
import {RouterModule} from "@angular/router";
import {ROUTES} from "./app.routes";
import { RestauranteComponent } from './restaurante/restaurante.component';
import { OfertaComponent } from './oferta/oferta.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RodapeComponent,
    TopoComponent,
    DiversaoComponent,
    RestauranteComponent,
    RestauranteComponent,
    OfertaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(ROUTES),
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
