import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, take } from 'rxjs';
import { Produto } from '../../produtos/produto/produto.model';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  apiUrl = 'http://localhost:8080/produtos';
  private renderer!: Renderer2;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) {}

  //Mostra todos os produtos
  getAll() {
    return this.httpClient.get<Produto[]>(this.apiUrl);
  }

  getProdutoById(id: number) {
    return this.httpClient.get<Produto>(this.apiUrl + '/' + id).toPromise();
  }

  saveProduto(produto: Produto): Observable<Produto> {
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

    return this.httpClient.post<Produto>(
      this.apiUrl,
      produto,
      this.httpOptions
    );
  }

  updateProduto(produto: Produto): Observable<Produto> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:8080',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS,HEAD,TRACE,CONNECT'
      }),
    };

    return this.httpClient.put<Produto>(
      this.apiUrl + '/' + produto.id,
      produto, this.httpOptions
    );
  }

  deleteProduto(id: any) {
    return this.httpClient.delete(this.apiUrl + '/' + id).pipe(take(1));
  }
}
