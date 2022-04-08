import { Component, OnInit } from '@angular/core';
import {ProdutoService} from "../shared/service/produto.service";
import {Produto} from "../produtos/produto/produto.model";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  produtos : Produto [] = []
  constructor(private produtoService : ProdutoService) { }

  ngOnInit(): void {
  }

}
