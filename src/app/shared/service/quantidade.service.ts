import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Quantidade } from "src/app/quantidade/quantidade.model";


@Injectable({
    providedIn: 'root'
  })
  export class QuantidadeService {
    apiUrl = 'http://localhost:8080/quantidades'

    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

    constructor(private httpClient: HttpClient) {
    }

    //Mostra todos os produtos
    getAll() {
     return this.httpClient.get<Quantidade[]>(this.apiUrl);
    }
}
