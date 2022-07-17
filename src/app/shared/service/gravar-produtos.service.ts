import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { GravarProdutos } from 'src/app/gravar-produtos/gravar-produtos.model';
import { ProdutosInseridos } from 'src/app/produtos/produto/produtos-inseridos.model';

@Injectable({
  providedIn: 'root',
})
export class GravarProdutosService {
  apiUrl = 'http://localhost:8080/produtos-gravados';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:8080',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods':
        'GET,PUT,POST,DELETE,OPTIONS,HEAD,TRACE,CONNECT',
    }),
  };

  constructor(private httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get<GravarProdutos[]>(this.apiUrl);
  }

  saveProduto(gravar: GravarProdutos): Observable<GravarProdutos> {
    return this.httpClient.post<GravarProdutos>(
      this.apiUrl,
      gravar,
      this.httpOptions
    );
  }

  updateProduto(gravarProdutos: ProdutosInseridos): Observable<ProdutosInseridos> {
    console.log(gravarProdutos)
    return this.httpClient.put<ProdutosInseridos>(
      this.apiUrl + '/' + gravarProdutos.idProd,
      gravarProdutos
    );
  }

  deleteProduto(id: any) {
    return this.httpClient.delete(this.apiUrl + '/' + id).pipe(take(1));
  }
}
