import { HomeComponent } from './home/home.component'
import { DiversaoComponent } from './diversao/diversao.component'
import {RestauranteComponent} from "./restaurante/restaurante.component";
import {Routes} from "@angular/router";
import {OfertaComponent} from "./oferta/oferta.component";

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'restaurantes', component: RestauranteComponent },
  { path: 'diversao', component: DiversaoComponent },
  {path:'ofertas',component:HomeComponent},
  {path:'ofertas/:id',component:OfertaComponent},
]
