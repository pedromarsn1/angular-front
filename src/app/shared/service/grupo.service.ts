import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Grupo } from "src/app/grupo/grupo.model";

@Injectable({
    providedIn: 'root'
  })
  export class ProdutoService {
    apiUrl = 'http://localhost:8080/grupos'
  
    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
  
    constructor(private httpClient: HttpClient) {
    }
  
    //Mostra todos os produtos
    getAll() {
      return this.httpClient.get<Grupo[]>(this.apiUrl).toPromise();
    }
}