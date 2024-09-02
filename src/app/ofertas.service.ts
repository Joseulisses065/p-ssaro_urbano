import { Injectable } from '@angular/core';
import {Oferta} from "./shared/oferta.model";
import {HttpClient} from "@angular/common/http";
import {lastValueFrom} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class OfertasService {
  link:string = 'http://localhost:3000/ofertas?destaque=true';
  linkBase:string = 'http://localhost:3000/ofertas';

  constructor(private http: HttpClient) { }

  public getOfertas(): Promise<Oferta[]> {
    return lastValueFrom(this.http.get<Oferta[]>(this.link));
  }

  public getOfertasPorCategoria(categoria:string):Promise<Oferta[]> {
    return lastValueFrom(this.http.get<Oferta[]>(this.linkBase+`?categoria=${categoria}`));
  }

  public getOfertasPorId(id:string): Promise<Oferta[]>{
    return lastValueFrom(this.http.get<Oferta[]>(this.linkBase+`?id=${id}`))
  }
}
