import {Component, Input, OnInit} from '@angular/core';
import {Produto} from "../produtos/produto/produto.model";
import {ProdutoService} from "../shared/service/produto.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-tabela-produtos',
  templateUrl: './tabela-produtos.component.html',
  styleUrls: ['./tabela-produtos.component.scss']
})
export class TabelaProdutosComponent implements OnInit {

  constructor(public produtoService: ProdutoService) {
  }

  ngOnInit(): void {

  }

  getAllProdutos() {
    this.produtoService.getAll()
      .then(produtos => console.log(produtos))
      .catch(error => console.error(error))
  }

  getByIdProduto() {
    this.produtoService.getProdutoById(4)
      .then(produtos => console.log(produtos))
      .catch(error => console.error(error))
  }

  saveProduto() {
    const produto: Produto = {
      codProduto: 654,
      quantidade: 85,
      nome: "Jujuba Fini",
      _id: 123
    }
    this.produtoService.saveProduto(produto)
      .then(produto => console.log('Adicionado'))
      .catch(error => console.error(error));
  }

  updateProduto() {
    const produto: Produto = {
      _id: 11,
      nome: "Papel Higienico",
      codProduto: 253,
      unidade: "PC",
      quantidade: 85,
      grupo: "PUTS MANOR"
    }

    this.produtoService.updateProduto(produto)
      // .then(produto => console.log("Atualizaded"))
      // .catch(error => console.error(error))

  }

  deleteProduto() {
    this.produtoService.deleteCar(16)
      .then(res => console.log("apagaded", res))
      .catch(error => console.error(error))
  }
}
