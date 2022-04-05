import { Injectable } from '@angular/core';
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
     'Content-Type' : 'application/json'
   })
  }

  constructor(private httpClient: HttpClient) {}

  //Mostra todos os produtos
  getProduto(): Observable<Produto[]>{
   return this.httpClient.get<Produto[]>(this.apiUrl)
     .pipe(retry(2))
  }

  getProdutoById(id : number): Observable<Produto>{
   return  this.httpClient.get<Produto>(this.apiUrl + "/" + id)
     .pipe(retry(2))
  }

  saveProduto(produto : Produto): Observable<Produto>{
   return this.httpClient.post<Produto>(this.apiUrl,JSON.stringify(produto),this.httpOptions)
     .pipe(retry(2))
  }

  updateProduto(produto : Produto): Observable<Produto>{
   return this.httpClient.put<Produto>(this.apiUrl + "/" + produto._id, JSON.stringify(produto), this.httpOptions)
     .pipe(retry(1))
  }

  deleteCar(produto : Produto) {
    return this.httpClient.delete<Produto>(this.apiUrl + '/' + produto._id, this.httpOptions)
      .pipe(retry(1)),
      catchError(this.handleError)
  }

  // Manipulação de erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };


}
