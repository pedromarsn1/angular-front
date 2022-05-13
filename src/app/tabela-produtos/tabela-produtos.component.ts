import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Produto } from '../produtos/produto/produto.model';
import { ProdutoService } from '../shared/service/produto.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { QuantidadeService } from '../shared/service/quantidade.service';
import { Quantidade } from '../quantidade/quantidade.model';
import { GravarProdutos } from '../gravar-produtos/gravar-produtos.model';
import { GravarProdutosService } from '../shared/service/gravar-produtos.service';

@Component({
  selector: 'app-tabela-produtos',
  templateUrl: './tabela-produtos.component.html',
  styleUrls: ['./tabela-produtos.component.scss'],
  preserveWhitespaces: true,
})
export class TabelaProdutosComponent implements OnInit {
 //searchText: any;
 //gravarProdutos: GravarProdutos[] = [];
 //produtos: Produto[] = [];
 //quantidades: Quantidade[] = [];
 //deleteModalRef?: BsModalRef;
 //@ViewChild('deleteModal') deleteModal: any;
 //message?: string;
 //@Input() produtoSelecionado: Produto[] = [];

  constructor(
  //  private produtoService: ProdutoService,
  //  private quantidadeService: QuantidadeService,
  //  private gravarProdutoService: GravarProdutosService,
  //  private modalService: BsModalService
  ) {}

  ngOnInit(): void {
   //this.produtoService
   //  .getAll()
   //  .subscribe((dados) => (this.produtoSelecionado = dados));
   //this.produtoService.getAll().subscribe((dados) => (this.produtos = dados));
   //this.quantidadeService
   //  .getAll()
   //  .subscribe((dados) => (this.quantidades = dados));
   //this.gravarProdutoService
   //  .getAll()
   //  .subscribe((dados) => (this.gravarProdutos = dados));
   //this.produtoService.deleteProduto;
  }
}
