import { HomeComponent } from './home/home.component'
import { DiversaoComponent } from './diversao/diversao.component'
import {RestauranteComponent} from "./restaurante/restaurante.component";
import {Routes} from "@angular/router";
import {OfertaComponent} from "./oferta/oferta.component";
import {ComoUsarComponent} from "./oferta/como-usar/como-usar.component";
import {OndeFicaComponent} from "./oferta/onde-fica/onde-fica.component";

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'restaurantes', component: RestauranteComponent },
  { path: 'diversao', component: DiversaoComponent },
  {path:'ofertas',component:HomeComponent},
  {path:'ofertas/:id',component:OfertaComponent, children: [
      {path:'', component: ComoUsarComponent},
      {path:'como-usar', component: ComoUsarComponent},
      {path:'onde-fica',component:OndeFicaComponent},
    ]},
]
