import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, take } from 'rxjs';
import { ProdutosInseridos } from '../../produtos/produto/produtos-inseridos.model';

@Injectable({
  providedIn: 'root',
})
export class ProdutosInseridosService {
  apiUrl = 'http://localhost:8080/produtos-inseridos';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) {}

  //Mostra todos os produtos
  getAll() {
    return this.httpClient.get<ProdutosInseridos[]>(this.apiUrl);
  }

  getProdutoById(id: number) {
    return this.httpClient.get<ProdutosInseridos>(this.apiUrl + '/' + id).toPromise();
  }

  saveProduto(produto: ProdutosInseridos): Observable<ProdutosInseridos> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:8080',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
        key: 'x-api-key',
        value: 'NNctr6Tjrw9794gFXf3fi6zWBZ78j6Gv3UCb3y0x',
      }),
    };

    return this.httpClient.post<ProdutosInseridos>(
      this.apiUrl,
      produto,
      this.httpOptions
    );
  }

  updateProduto(produto: ProdutosInseridos): Observable<ProdutosInseridos> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:8080',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS,HEAD,TRACE,CONNECT'
      }),
    };

    return this.httpClient.put<ProdutosInseridos>(
      this.apiUrl + '/' + produto.id,
      produto, this.httpOptions
    );
  }

  deleteProduto(id: any) {
    return this.httpClient.delete(this.apiUrl + '/' + id).pipe(take(1));
  }

}
