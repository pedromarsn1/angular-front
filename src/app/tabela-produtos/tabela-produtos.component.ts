import {Component, Input, OnInit} from '@angular/core';
import {Produto} from "../produtos/produto/produto.model";
import {ProdutosService} from "../produtos/produtos.service";

@Component({
  selector: 'app-tabela-produtos',
  templateUrl: './tabela-produtos.component.html',
  styleUrls: ['./tabela-produtos.component.scss']
})
export class TabelaProdutosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

}
