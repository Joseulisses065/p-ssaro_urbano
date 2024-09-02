import {Component, OnInit} from '@angular/core';
import {OfertasService} from "../ofertas.service";
import {Oferta} from "../shared/oferta.model";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers:[OfertasService]
})
export class OfertaComponent implements OnInit {
  public oferta!: Oferta;

  constructor(private ofertasService: OfertasService,private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.ofertasService.getOfertasPorId(this.route.snapshot.params['id']).then((of:Oferta[])=>{
      this.oferta=of[0];
      console.log(this.oferta)
    }).catch((param: any) => {
      console.log(param)
    })
  }



}
