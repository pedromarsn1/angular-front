import {Component, Input, OnInit} from '@angular/core';
import {Produto} from "./produto/produto.model";
import {ProdutosService} from "./produtos.service";

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {

  produtos : Produto[] = []

  constructor(private produtosService: ProdutosService) { }

  ngOnInit(): void {
    this.produtos = this.produtosService.produtos()
  }

}
