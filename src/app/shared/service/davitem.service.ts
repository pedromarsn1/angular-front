import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { DavItem } from "src/app/dav-item/dav-item.model";

@Injectable({
    providedIn: 'root'
  })
  export class DavItemService {
    apiUrl = 'http://localhost:8080/davitem'

    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

    constructor(private httpClient: HttpClient) {
    }

    getAll() {
      return this.httpClient.get<DavItem[]>(this.apiUrl);
    }
    
    updateProduto(davitem : DavItem): Observable<DavItem> {
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

      return this.httpClient.put<DavItem>(
        this.apiUrl + '/' + davitem.id,
        davitem,
        this.httpOptions
      );
    }
}
