import {Component, OnInit} from '@angular/core';
import {OfertasService} from "../core/ofertas.service";
import {Oferta} from "../shared/oferta.model";

@Component({
  selector: 'app-diversao',
  templateUrl: './diversao.component.html',
  styleUrls: ['./diversao.component.css'],
  providers: [OfertasService]

})
export class DiversaoComponent implements OnInit {
   public ofertas!: Oferta[]

  constructor(private ofertasService: OfertasService) {
  }

  ngOnInit(): void {
    this.ofertasService.getOfertasPorCategoria("diversao").then((oferta:Oferta[])=>{
      this.ofertas=oferta;
    }).catch((param: any) => {
      console.log(param);
    })
  }


}
