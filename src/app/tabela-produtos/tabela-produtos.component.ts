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

  produto = {} as Produto
  produtos: Produto[] = []

  constructor( public produtoService : ProdutoService) { }

  ngOnInit(): void {

  }

  saveProduto(form: NgForm) {
    if (this.produto._id !== undefined) {
      this.produtoService.updateProduto(this.produto).subscribe(() => {
        this.cleanForm(form);
      });
    } else {
      this.produtoService.saveProduto(this.produto).subscribe(() => {
        this.cleanForm(form);
      });
    }
  }

  getProduto() {
    this.produtoService.getProduto().subscribe((produtos: Produto[]) => {
      this.produtos = produtos;
    });
  }

  deleteProduto(produto: Produto) {
    this.produtoService.updateProduto(produto).subscribe(() => {
      this.getProduto();
    });
  }

  editProduto(produto: Produto) {
    this.produto = { ...produto };
  }

  cleanForm(form: NgForm) {
    this.getProduto();
    form.resetForm();
    this.produto = {} as Produto;
  }

}
