import {Component, Input, OnInit} from '@angular/core';
import {Produto} from "../produtos/produto/produto.model";
import {ProdutoService} from "../shared/service/produto.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-tabela-produtos',
  templateUrl: './tabela-produtos.component.html',
  styleUrls: ['./tabela-produtos.component.scss'],
  preserveWhitespaces: true
})

export class TabelaProdutosComponent implements OnInit {
searchText: any
produtos : Produto [] = []

  constructor(public produtoService: ProdutoService) {
  }

  ngOnInit(): void {
    this.produtoService.getAll().subscribe(dados => this.produtos = dados)
  }



  getByIdProduto() {
    this.produtoService.getProdutoById(4)
      .then(produtos => console.log(produtos))
      .catch(error => console.error(error))
  }

  deleteProduto() {
    this.produtoService.deleteCar(8)
      .then(res => console.log("Apagado", res))
      .catch(error => console.error(error))
  }
}
