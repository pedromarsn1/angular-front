import { Component, OnInit } from '@angular/core';
import {Produto} from "../produtos/produto/produto.model";
import {ProdutoService} from "../shared/service/produto.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-form-produto',
  templateUrl: './form-produto.component.html',
  styleUrls: ['./form-produto.component.scss']
})
export class FormProdutoComponent implements OnInit {
  produto = {} as Produto
  produtos: Produto[] = []

  constructor( public produtoService : ProdutoService) { }

  ngOnInit(): void {

  }

  saveProduto(){
    this.produtoService.saveProduto(this.produto)
    .then(produto => console.log("Adicionado", produto))
    .catch(error=> console.error(error))  
  }

}
