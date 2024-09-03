import { Injectable } from '@angular/core';
import {Oferta} from "../shared/oferta.model";
import {HttpClient} from "@angular/common/http";
import {lastValueFrom} from "rxjs";
import {URL_API} from "../app.api";

@Injectable({
  providedIn: 'root'
})
export class OfertasService {

  constructor(private http: HttpClient) { }

  public getOfertas(): Promise<Oferta[]> {
    return lastValueFrom(this.http.get<Oferta[]>(`${URL_API}?destaque=true`));
  }

  public getOfertasPorCategoria(categoria:string):Promise<Oferta[]> {
    return lastValueFrom(this.http.get<Oferta[]>(URL_API+`?categoria=${categoria}`));
  }

  public getOfertasPorId(id:string): Promise<Oferta[]>{
    return lastValueFrom(this.http.get<Oferta[]>(URL_API+`?id=${id}`))
  }
}
