import {Component, OnInit} from '@angular/core';
import { OfertasService } from '../core/ofertas.service'
import { Oferta } from '../shared/oferta.model'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [OfertasService]
})
export class HomeComponent implements OnInit {

  public ofertas!: Oferta[]
  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {
    this.ofertasService.getOfertas()
      .then((ofertas: Oferta[]) => {
        this.ofertas = ofertas
        console.log(this.ofertas);

      })
      .catch((param: any) => {
        console.log(param)
      })


  }

  protected readonly ontoggle = ontoggle;
}
