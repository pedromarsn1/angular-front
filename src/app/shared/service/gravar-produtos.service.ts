import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { GravarProdutos } from "src/app/gravar-produtos/gravar-produtos.model";

@Injectable({
    providedIn: 'root'
  })
  export class GravarProdutosService {
    apiUrl = 'http://localhost:8080/produtos-gravados'

    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

    constructor(private httpClient: HttpClient) {
    }

    getAll() {
      return this.httpClient.get<GravarProdutos[]>(this.apiUrl);
    }
    updateProduto(gravarProdutos : GravarProdutos): Observable<GravarProdutos> {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': 'http://localhost:8080',
          'Access-Control-Allow-Credentials': 'true',
          'Access-Control-Allow-Headers': 'Content-Type',
          'Access-Control-Allow-Methods':
            'GET,PUT,POST,DELETE,OPTIONS,HEAD,TRACE,CONNECT',
        }),
      };

      return this.httpClient.put<GravarProdutos>(
        this.apiUrl + '/' + gravarProdutos.id,
        gravarProdutos,
        this.httpOptions
      );
    }
}
