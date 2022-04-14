import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Unidade } from "src/app/unidade/unidade.model";

@Injectable({
    providedIn: 'root'
  })
  export class ProdutoService {
    apiUrl = 'http://localhost:8080/unidades'
  
    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
  
    constructor(private httpClient: HttpClient) {
    }
  
    //Mostra todos os produtos
    getAll() {
     return this.httpClient.get<Unidade[]>(this.apiUrl).toPromise();
    }
}