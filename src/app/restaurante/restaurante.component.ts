import {Component, OnInit} from '@angular/core';
import {OfertasService} from "../ofertas.service";
import {Oferta} from "../shared/oferta.model";

@Component({
  selector: 'app-restaurante',
  templateUrl: './restaurante.component.html',
  styleUrls: ['./restaurante.component.css'],
  providers: [OfertasService]
})
export class RestauranteComponent implements OnInit {
  public ofertas!: Oferta[]

  constructor(private ofertasService: OfertasService) {
  }

  ngOnInit(): void {
    this.ofertasService.getOfertasPorCategoria("restaurante")
      .then((ofertas: Oferta[]) => {
        this.ofertas = ofertas;
      }).catch((param: any) => {
        console.log(param)
      }
    )
  }


}
