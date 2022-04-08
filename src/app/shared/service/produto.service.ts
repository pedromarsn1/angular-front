import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";
import {Produto} from "../../produtos/produto/produto.model";

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  apiUrl = 'http://localhost:8080/produtos'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) {
  }

  //Mostra todos os produtos
  getAll() {
    return this.httpClient.get<Produto[]>(this.apiUrl).toPromise();
  }

  getProdutoById(id: number) {
    return this.httpClient.get<Produto>(this.apiUrl + "/" + id).toPromise();
  }

  saveProduto(produto: Produto) {
    return this.httpClient.post<Produto>(this.apiUrl, produto).toPromise();

  }

  updateProduto(produto : Produto) {
    return this.httpClient.put<Produto>(this.apiUrl + "/" + produto._id, produto).subscribe(
      resultado => {
        console.log('Produto alterado com sucesso.')
      })

  }

  deleteCar(id : number) {
    return this.httpClient.delete<Produto>(this.apiUrl + '/' + id).toPromise();
  }


}
